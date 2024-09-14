from neo4j import GraphDatabase
import json
import os


uri = "bolt://localhost:port"
user = "neo4j"
password = "passwd"


class Neo4jConnection:
    def __init__(self, uri, user, password):
        self.driver = GraphDatabase.driver(uri, auth=(user, password))

    def close(self):
        self.driver.close()
    
    def get_id(self,properties):
        type_list = ['ComponentID','ExampleID','InterfaceID','PropertyID','EventID']
        id = properties.get(type_list[0])
        if id is not None:
            type = type_list[0].split('ID')[0]
            return type,id
        id = properties.get(type_list[1])
        if id is not None:
            type = type_list[1].split('ID')[0]
            return type,id
        id = properties.get(type_list[2])
        if id is not None:
            type = type_list[2].split('ID')[0] 
            return type,id
        id = properties.get(type_list[3])
        if id is not None:
            type = type_list[3].split('ID')[0]
            return type,id
        id = properties.get(type_list[4])
        if id is not None:
            type = type_list[4].split('ID')[0]
            return type,id
        

    def query(self, query, parameters=None):
        with self.driver.session() as session:
            result = session.run(query, parameters)
            res = {}
            type_list = ['Component','Example','Interface','Property','Event']
            index = 0
            for record in result:
                for node in record:
                    if not isinstance(node,list):
                        properties = node._properties
                        type,id = self.get_id(properties)
                    else:
                        ids = []
                        properties = []
                        for n in node:
                            type,id = self.get_id(n._properties)
                            if id not in ids:
                                ids.append(id)
                                properties.append(n._properties)
                    type = type_list[index]
                    index += 1
                    res[type] = properties
                    print(properties)
            return res

def search_neo4j_by_id(component_id):
    reference_dir = "./component_info/ArkTS/references"
    conn = Neo4jConnection(uri, user, password)

    query = '''MATCH (component:Component {ComponentID: $component_id})
    OPTIONAL MATCH (component)-[:Has_Example]->(ex:Example)
    OPTIONAL MATCH (component)-[:Has_Interface]->(i:Interface)
    OPTIONAL MATCH (component)-[:Has_Property]->(pr:Property)
    OPTIONAL MATCH (component)-[:Has_Event]->(ev:Event)
    RETURN component,
        collect(ex) AS examples,
        collect(i) AS interfaces,
        collect(pr) AS properties,
        collect(ev) AS events
'''

    parameters = {"component_id": component_id}

    result = conn.query(query, parameters)
    print(result)
    component_id = result["Component"]["ComponentID"]
    reference_path = os.path.join(reference_dir, str(component_id) + ".json")


    json_result = json.dumps(result, ensure_ascii=False, indent=4)
    with open(reference_path, 'w',encoding='utf-8') as f:
        f.write(json_result)

    print(json_result)

    conn.close()
    return json_result

if __name__ == '__main__':
    search_neo4j_by_id(10055)


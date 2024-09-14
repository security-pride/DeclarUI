from llmrankers.setwise import SetwiseLlmRanker
from llmrankers.rankers import SearchResult
def similarity_search(query):
    info_list = [{'id': '10001', 'text': 'name: arkTSBlank, description: ...'}, {'id': '10002', 'text': 'name: arkTSButton, description: ...'}, ...]
    docs = []
    for info in info_list:
        docs.append(SearchResult(docid=info['id'], text=info['text'], score=None))

    # docs = [SearchResult(docid=i, text=f'this is passage {i}', score=None) for i in range(100)]
    # query = 'image'

    ranker = SetwiseLlmRanker(model_name_or_path='google/flan-t5-large',
                            tokenizer_name_or_path='google/flan-t5-large',
                            device='cuda',
                            num_child=10,
                            scoring='generation',
                            method='heapsort',
                            k=10)

    res = ranker.rerank(query, docs)[:2]
    doc_list = []
    for sr in res:
        doc_list.append(sr.docid)
    print(res)
    return doc_list

if __name__ == '__main__':
    similarity_search("Row")
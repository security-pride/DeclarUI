# DeclarUI
DeclarUI is an approach for the purpose of enhancing MLLM-based declarative UI code generation from UI designs. DeclarUI integrates advanced computer vision techniques with MLLMs to decompose complex UI designs into structured component information. We introduce the Page Transition Graph (PTG) to represent the app's navigation logic, which, combined with the structured component information, forms a comprehensive prompt for the MLLM. After initial code generation, DeclarUI employs an iterative refinement process, performing navigational integrity and compilation checks to identify and rectify common errors. This multi-stage approach ensures the generated UI code is both visually accurate and functionally robust across multiple pages.

## Dataset
We curated a dataset of 50 mobile app UI designs (including 250 app pages), including 25 UI design mockups and 25 real-app screenshots, across 10 functional categories, including Social Networking, Entertainment, Productivity, Education, Wellness, Finance, Shopping & E-commerce, Travel & Navigation, News & Information, and Utility & Practical Tools. This diversity allows us to assess the generalizability and robustness of our approach across various UI design paradigms and app types. For each app, the composition is as follows:
- five UI design mockups/app screenshots, representing a set of pages within an app that are logically related.
- one Page Transition Graph(PTG) JSON file, representing interaction logic within pages.

## Getting Started
### Prerequisites
Ensure you have the following prerequisites installed:
- Python 3.8 or higher
- Andrid Studio and React Native CLI
- Git

### Installation
Clone the repository to your local machine:
```bash
git clone https://anonymous.4open.science/r/DeclarUI-3438
cd DeclarUI
```

### Data preprocessing
Our data preprocess including two steps:
1. PTG construction
You can run the following command to generate PTG JSON files for each app:
```bash
cd Scripts/data_preprocess/ptg_construction
python ptg_generate.py
```
2. UI component extraction
The UI component extraction process involves three main steps:
- Grounding DINO: This step involves using the Grounding DINO model to detect UI components in the app screenshots.
- SAM: This step involves using the SAM model to segment the detected UI components.
- LLM: This step involves using the LLM to generate descriptions for the segmented UI components.

You can run the following command to extract UI components and obtain component analysis results from the app screenshots:
```bash
cd Scripts/data_preprocess/component_extraction
python lang-segment-anything/extract_components_from_img.py
python lang-segment-anything/deduplicate_split_img.py
python componet_analysis/componet_analysis.py
```

### UI code generation
To generate UI code, run the following command:
```bash
cd Scripts/code_generation/code_generate_scripts
python code_generate_declarUI.py
```

### Evaluation
We calculate CLIP score and SSIM score to evaluate the visual similarity between the generated UI code and the app screenshots, run the following command:
```bash
cd Scripts/evaluations/visual_similarity
python visual_score.py
```
For user study, we use Git to track code modifications, run the following command to get the code modifications:
```bash
cd Scripts/evaluations/rq3_userstudy
python count_edit_lines.py
```

## Others
:)
We thank all the reviewers for the valuable feedback!
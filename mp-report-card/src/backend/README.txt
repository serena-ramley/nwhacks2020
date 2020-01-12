To setup run:
pip install --upgrade azure-cognitiveservices-language-textanalytics
or
pip3 install --upgrade azure-cognitiveservices-language-textanalytics

run backend.py to run the flask app with default location of http://localhost:5000/

to get a string representing an MPs fractional attendance, GET /get_attendance/<first>-<last>

to get a string of a bill's keywords, run summarize_bill/<session>-<bill>

EX1:
  Input:
  http://localhost:5000/summarize_bill/42-1-c-45
  Output:
  ["Act binding", "Substances Act Amendments", "Cannabis Act Interpretation", "Act respecting cannabis", "cannabis DIVISION", "recalled cannabis", "Provision of information", "Promotion-related information", "Criminal Records Act", "Substances Act", "Criminal Matters Act", "Customs Act", "SUBDIVISION B\u2002 Packaging", "Criminal Code Application of Criminal Code", "SUBDIVISION C\u2002 Display Display of cannabis", "cannabis accessories", "Criminal Code Sections", "Criminal Code Offence", "Criminal Code Assistance", "Criminal Code Division", "Effect of notice", "Proof of notice", "Notice of compliance", "Notice of default", "Cannabis Act cannabis", "Drugs Act", "Cannabis Act Controlled Drugs", "provisions of regulations", "Substances Act Cannabis Act", "Cannabis Act cannabis", "Firearms Act", "Contraventions Act", "Cannabis Act cannabis", "Cannabis Act Controlled Drugs", "Tobacco Act", "Substances Act Cannabis Act Bill C", "fresh cannabis", "cannabis plants", "cannabis oil", "Classes of Cannabis"]

EX2:
  Input
  http://localhost:5000/get_attendance/justin-trudeau
  Output:
  0.5552569701041317

Welcome to Github-API-automation-using-Cypress


For setup kindly follow below steps : 
1. Clone this repo
2. Run "npm i" on terminal
3. Create dev.sh file and paste below lines :
 
 export CYPRESS_baseUrl=https://api.github.com
 
 export CYPRESS_userToken=Bearer Token


5. To get above token follow below steps : 
    1. Log in to your GitHub account.
    2. Navigate to Settings > Developer settings > Personal access tokens.
    3. Click on "Generate new token".
    4. Give your token a descriptive name, such as "QA Automation Test".
    5. Under scopes, select the ***user*** to update your profile information.
    6. Click "Generate token" at the bottom of the page.
    7. Copy the generated token and store it securely.

6. Run "source dev.sh" on terminal
7. TO open cypress run "npx cypress open"
8. Run test cases in dev mode and verify api validations.

Note : to generate report and run all test cases : Run "npx cypress run" after execution it will automtically generate refort folder under cypress folder.

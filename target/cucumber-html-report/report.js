$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Test.feature");
formatter.feature({
  "line": 1,
  "name": "Test Facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I enter valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "smokeTest.open_Chrome_and_start_application()"
});
formatter.result({
  "duration": 106248293,
  "status": "passed"
});
formatter.match({
  "location": "smokeTest.i_enter_valid_username_and_password()"
});
formatter.result({
  "duration": 162966,
  "status": "passed"
});
formatter.match({
  "location": "smokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 59575,
  "status": "passed"
});
formatter.match({
  "location": "smokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 60324,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Open Chrome and start application",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter valid username and password",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "application should be closed",
  "keyword": "Then "
});
formatter.match({
  "location": "smokeTest.open_Chrome_and_start_application()"
});
formatter.result({
  "duration": 55622,
  "status": "passed"
});
formatter.match({
  "location": "smokeTest.i_enter_valid_username_and_password()"
});
formatter.result({
  "duration": 78102,
  "status": "passed"
});
formatter.match({
  "location": "smokeTest.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 59930,
  "status": "passed"
});
formatter.match({
  "location": "smokeTest.application_should_be_closed()"
});
formatter.result({
  "duration": 71136,
  "status": "passed"
});
});
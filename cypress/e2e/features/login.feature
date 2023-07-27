Feature: Appcharge store login flow

  Background:
    Given User is already on Appcharge store login page

    @scenario1
    Scenario: Check that user successfully logged in with valid player ID
      Given Click on 'Login with player ID' button on login page
      And Fill in player ID
      When Click on 'Login' button
      Then Assert that user is navigated to Appcharge store homepage


    @scenario2
    Scenario: Check that user isn't logged with invalid player ID
      Given Click on 'Login with player ID' button on login page
      And Fill space in player ID field
      When Click on 'Login' button
      Then Assert that user authentication failed

    @scenario3
    Scenario: Check that user is successfully logged out
      Given Login as Appcharge store user
      And Click on Appcharge smaller logo
      When Click on 'Logout'
      Then Assert that user is successfully logged out from the store

Feature: Form

  @form
  @user-successfully-completes-form-with-phone

  Scenario: User successfully completes form with phone
    Given I choose to view story "profile-form--default-form"
    And I see the "Profile" form
    Then I provide "James" for "First Name" field
    And I provide "Smith" for "Last Name" field
    And I provide "james.smith@example.com" for "Email Address" field
    And I provide "0411 332 112" for "Phone Number" field
    And I see I can choose to continue
    Then I choose to continue
    When I see the "Address" form
    Then I provide "48" for "Street Number" field
    And I provide "Frank" for "Street Name" field
    And I provide "St" for "Street Type" selection
    And I provide "Exampleville" for "Suburb" field
    And I provide "4550" for "Postcode" field
    And I see I can choose to continue
    Then I choose to continue
    And I see the "Review" form
    Then I see I have entered "James" for the "First Name" field
    And I see I have entered "Smith" for the "Last Name" field
    And I see I have entered "james.smith@example.com" for the "Email Address" field
    And I see I have entered "0411 332 112" for the "Phone Number" field
    And I see I have entered "48" for the "Street Number" field
    And I see I have entered "Frank" for the "Street Name" field
    And I see I have entered "St" for the "Street Type" field
    And I see I have entered "Exampleville" for the "Suburb" field
    And I see I have entered "4550" for the "Postcode" field
    And I see I can choose to submit
    Then I choose to submit


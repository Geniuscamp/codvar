

Codvar is Python library provides a set of functions for validating, formatting, generating, and suggesting usernames. The library aims to assist in managing and handling email,password,username and phone effectively in your applications.
  1. Username
## Functions:

1.1 validate_username(username, min_length=4, allowed_special_chars=None, uniqueness_check=False, taken_usernames=None)

- Description: Validates the input username based on specified criteria.
- Parameters:
  - username (str): The username to validate.
  - min_length (int): Minimum length required for the username.
  - allowed_special_chars (str): Allowed special characters for the username.
  - uniqueness_check (bool): Flag to check for username uniqueness.
  - taken_usernames (list): List of existing usernames for uniqueness check.
- Returns: True if the username passes validation criteria.
```python


         Example


 import codvar
 from codvar import validate_username
Example of validating a username
try:
    validate_username("user123", min_length=6, allowed_special_chars="!@#", uniqueness_check=True, taken_usernames=['user123', 'admin'])
    print("Username validation passed!")
except ValueError as e:
    print(f"Username validation failed: {e}")





       1.2 format_username(username)

- Description: Formats the username for better readability by converting to lowercase, stripping whitespace, and replacing spaces with underscores.
- Parameters:
  - username (str): The username to format.
  - Returns: Formatted username as a string.

              Example


        import codvar
        from codvar import format_username
        # Example of formatting a username
        formatted_username = format_username("  My Username   ")
        print(formatted_username)  # Output: "my_username"






1.3 generate_username(length=8, prefix="user", uniqueness_check=False, taken_usernames=None)

- Description: Generates a random username with a specified length and prefix, optionally checking for uniqueness.
- Parameters:
  - length (int): Length of the random suffix for the username.
  - prefix (str): Prefix added to the username.
  - uniqueness_check (bool): Flag to check for username uniqueness.
  - taken_usernames (list): List of existing usernames for uniqueness check.
- Returns: Generated username as a string.
     

               Example


            import codvar
            from codvar import format_username
            unique_username = generate_username(length=16 prefix='@')
            print(unique_username)





  4. suggest_similar_usernames(username, num_similar=5, max_digits=3)

- Description: Generates a list of similar usernames with random suffixes based on the input username.
- Parameters:
  - username (str): The base username to suggest similar usernames.
  - num_similar (int): Number of similar usernames to generate.
  - max_digits (int): Maximum number of digits in the random suffix.
  - Returns: List of similar usernames as strings.

           Example

            import codvar
            from codvar import suggest_similar_usernames
            similar_usernames = suggest_similar_usernames("username", num_similar=7, max_digits=4)
            print(similar_usernames)


2.  Password Validation

This library provides a function to validate passwords based on various criteria.

## Function: `validate_password`

### Description

Validates a password based on specified criteria including length, character requirements, and custom conditions.

### Parameters

- **`password`** (str): The password to be validated.
- **`length`** (int, optional): Exact length the password should be. Defaults to `None`.
- **`min_length`** (int, optional): Minimum length the password should be. Defaults to `None`.
- **`max_length`** (int, optional): Maximum length the password should be. Defaults to `None`.
- **`require_digit`** (bool, optional): Whether the password must contain at least one digit. Defaults to `False`.
- **`require_upper`** (bool, optional): Whether the password must contain at least one uppercase letter. Defaults to `False`.
- **`require_lower`** (bool, optional): Whether the password must contain at least one lowercase letter. Defaults to `False`.
- **`require_special`** (bool, optional): Whether the password must contain at least one special character. Defaults to `False`.
- **`forbid_repeating`** (bool, optional): Whether the password should not contain repeating characters. Defaults to `False`.
- **`forbid_username`** (str, optional): A username that should not be part of the password. Defaults to `None`.
- **`custom`** (str, optional): Custom criteria for the password. Options are `'only_number'`, `'only_alpha'`, `'only_character'`, `'mixed'`. Defaults to `None`.
### Returns
- **`bool`**: `True` if the password meets all the specified criteria, `False` otherwise.
```python
     Examples


Example 1: Exact Length

import codvar
from codvar import validate_password

test =validate_password("abcd1234", length=8)
print(test)

test2 =validate_password("abcd123", length=8)
print(test2)
# Returns: False


Example 2: Minimum Length

import codvar
from codvar import validate_password

print(validate_password("abcd1234", min_length=6))
# Returns: True

print(validate_password("abc123", min_length=8))
# Returns: False

Explanation:

The first example checks if the password has a minimum length of 6 characters, which it does, so it returns True.
The second example checks if the password has a minimum length of 8 characters, which it doesn't, so it returns False.






Example 3: Valid Password


import codvar
from codvar import validate_password

vp = validate_password("Password123!", min_length=8, require_digit=True, require_upper=True, require_lower=True, require_special=True)
print(vp)

# Returns: True



Example 4: Missing Uppercase and Digit

import codvar
from codvar import validate_password

vp =validate_password("password", min_length=8, require_upper=True, require_digit=True)
print(vp)
# Returns: False

Example 5: Missing Special Character

import codvar
from codvar import validate_password

vp =validate_password("Password123", min_length=8, require_special=True)

print(vp)
# Returns: False

example 5 Forbid_username

import codvar
from codvar import validate_password


print(validate_password("MySecurePassword123!", forbid_username="Password"))
# Returns: False

print(validate_password("MySecure123!", forbid_username="Password"))
# Returns: True


Example 6 Prohibiting Repeated Characters and Username

import codvar
from codvar import validate_password

print(validate_password("Abc1!dEf", forbid_repeating=True, forbid_username="dEf"))
# Returns: False

print(validate_password("Abc1!deF", forbid_repeating=True, forbid_username="dEf"))
# Returns: True


Example 7: Custom Criteria - Only Special Characters


import codvar
from codvar import validate_password

print(validate_password("!@#$%^&*", custom="only_character"))
# Returns: True

print(validate_password("!@#a$%^&*", custom="only_character"))
# Returns: False


2.2 Password Strength Checker

 Introduction
The Password Strength Checker library provides functions for generating strong passwords and assessing the strength of user-defined passwords based on various criteria.





2.3. generate_strong_password(length=16)

Generates a strong password of a specified length.

        Parameters:
- length (optional): Specifies the length of the generated password. The default length is 16 characters.

        Example:


from codvar import generate_strong_password

password = generate_strong_password(12)
print(password)




      2.4 check_password_strength(password)


Assesses the strength of a given password and returns a percentage score based on multiple criteria.

   Parameters:
- password: The password to be evaluated.

     Example:
from codvar import check_password_strength

password = "Secret@123"
score = check_password_strength(password)
print(f"Password strength: {score}%")


The criteria for calculating the percentage score include:
- Presence of at least one digit
- Presence of at least one uppercase letter
- Presence of at least one lowercase letter
- Presence of at least one special character
- Minimum length of 8 characters

Real-World Example: Password Update Form in a Web Application

Consider a scenario where a user updates their password in a web application:

from password_strength_checker import check_password_strength

# Receive the new password from the user
user_new_password = input("Enter your new password: ")

# Check the strength of the user's new password
password_strength = check_password_strength(user_new_password)

if password_strength >= 80:
    print("Password strength is excellent. Update successful!")
else:
    print("Password strength is weak. Please choose a stronger password.")


Integrating the codvar library in web applications can enhance security measures and ensure users select robust passwords that meet security standards.





3. validate_email Function

This function is used to validate email addresses based on specified criteria.

Usage
The `validate_email` function takes two parameters:

    1. email (str): The email address to be validated.
    2. valid_domains (list, optional): A list of valid domain names to check against. 
       If provided, the email address must belong to one of these domains to be considered valid.

Returns
The function returns `True` if the email address passes validation, and `False` otherwise.

Examples

1. Basic usage without custom valid domains:

    from codvar import validate_email

    email = "example@gmail.com"
    is_valid = validate_email(email)
    print("Is the email valid?", is_valid)
  

    Output:
  
    Is the email valid? True
  

2. Usage with custom valid domains:


    from codvar import validate_email

    email = "example@gmail.com"
    custom_valid_domains = ["gmail.com", "yahoo.com"]
    is_valid = validate_email(email, custom_valid_domains)
    print("Is the email valid?", is_valid)
    

    Is the email valid? True
  

Notes

- If no `valid_domains` parameter is provided, the function will return `True` for all email addresses.
- Ensure that the `valid_domains` parameter is a list of domain names in lowercase.
- The function does not perform DNS lookup to verify domain existence.
- Custom validation rules can be added or modified as needed within the function.




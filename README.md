# Adoption Website

## Description

An adoption website where you are able to sort based on pet type (cat, dino, dog, or all). Once you sort, you can view cards that match your pet type preference and see pictures and information about the pet.

## Screenshots
<img width="1440" alt="screen shot 2018-10-06 at 10 45 55 am" src="https://user-images.githubusercontent.com/16019344/46573023-149c7080-c955-11e8-9c5f-09aabdba7d85.png">
<img width="1439" alt="screen shot 2018-10-06 at 10 46 03 am" src="https://user-images.githubusercontent.com/16019344/46573026-182ff780-c955-11e8-9f9e-d1788f9fc324.png">
<img width="1431" alt="screen shot 2018-10-06 at 10 46 09 am" src="https://user-images.githubusercontent.com/16019344/46573027-1b2ae800-c955-11e8-9a6f-4314e5dbff46.png">
<img width="1431" alt="screen shot 2018-10-06 at 10 46 16 am" src="https://user-images.githubusercontent.com/16019344/46573030-1d8d4200-c955-11e8-8e45-6438de7ed3f0.png">

## Setup

**Project has the following folders:**
```
|- db
    |- pets.json
|- javascripts
    |- events.js [Attaching all event listeners]
    |- main.js [Entry point/start application]
    |- components
        |- petComponent.js [Writing to the dom for the pet component]
    |- data
        |- petData.js [XHR call for pets.json]
    |- helpers
        |- util.js
|- index.html
|- main.css
```

**Install via CDN:**

- jQuery
- Bootstrap

## Requirements

- As a user, I want to see a listing of all available pets. Each pet should have a card that has all this data:
```
Image
Name: xxx
Color: xxx
Special Skill: xxx
Type of Pet: xxx
```
- As a user, I want to see 3 category(type) buttons printed at the top of the page. Each should be a different color. These can be hard-coded.
- I want to be able to click one of the 3 buttons, then only the cards that are in the category(type) should show.
- There should be some way for the user to unfilter the results.


![MockUp](MockUp.png)


## Technical Requirements

- You should be using Bootstrap; your project should look like the mockup displayed.
- You should be using ES6 modules.
- Your code should be clean and readable, with single responsibility principle.


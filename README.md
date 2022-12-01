# Development

### Link to Deployed Website
https://peepingpenguin198.github.io/csci1300-development/

### Goal and Value of the Application
My application serves as a Thanksgiving feast menu builder. This tool helps users calculate the total prep & cook time, as well as the total cost required by all the food they want to make. Thus, this application can aid users plan ahead in a stressful feat of hosting a Thanksgiving meal.
### Usability Principles Considered
Through the layout & hierarchy of my application, I addressed some of the following usability principles:

#### Learnability: How easy is it for users to accomplish basic tasks the first time they encounter the design?
- I decided to display a large header, image, and short welcome message when users first open the page. These serve to communicate the purpose of this tool in a concise and visually pleasant way. 
- I made sure to label all my buttons in an informative way, so that their function is clear. For example:
  - "Add to Menu" adds a dish to the menu, "+" increments and "-" decrements the unit counts in both the Dishes and Menu Summary sections).
  - "Show" indicates filters are additive (Union) rather than finding the intersecton (N). Their change in color upon clicking indicates whether they're on or off.
  - "Sort by" is a dropdown menu that allows users to select a sort type for the dishes displayed. Ascending and descending sorting is available for all the 3 numeric properties each dish has (Cost, Prep Time, Cook Time).
#### Efficiency: Once users have learned the design, how quickly can they perform tasks?
- Below the welcome section, I created a Dishes browser section and a Menu Summary section, which take up 2/3 and 1/3 of the page respective on large screens. This allows users to both browse their options for meals to cook see the summary of their chosen menu items, including how many units they've added and the total cost, prep time, and cook time they require. 
#### Errors: How many errors do users make, how severe are these errors, and how easily can they recover from the errors?
- By adding the "+" and "-" buttons in both the individual dish cards and the summary section, I allow users to easily change the number of items they added to their menu in case they're experimenting with different combinations or added too few/many units of a dish.

### Organization of Components
The App.js file has 'Menu' and 'Aggregator' components, making up the "Dishes" section and the "Menu Summary" respectively. 'Menu' includes the Dishes header, filters, sort types, and list of dish cards. Aggregator summarizes the dishes in the menu, including the names, quantities, unit costs, and total quantities. In the 'Menu' component, there is also a 'Dish' component that displays the content of individual dish cards.

### How Data is Passed Down Through Components
Both the 'Menu' and 'Aggregator' components take in the following props: menuItems, onAdd, and onRemove. menuItems keeps track of all the dishes that were added to/removed from the final menu; it is aided by the onAdd and onRemove functions with add/remove dishes upon their buttons being clicked. 'Menu' also has a dishes prop, which is just raw information about all the dishes from data.js.

### How the User Triggers State Changes
Users trigger state changes in my application when they interact with the Filter buttons, Add to Menu/Add/Remove buttons, and the Sort by dropdown. States are synced with UI elements such that states will change upon their related buttons being clicked or dropdown options being selected. Each filter button's state is a simple booleans, toggling between true/false for displaying dishes in that category. The Add to Menu/Add/Remove buttons use the unique ids of dishes to keep track of and aggregate the final menu users put together using the menuItems state variable. The Sort by dropdown triggers state change in the sortType state variable whenever a new sort type is selected and updates the order that dishes are displayed accordingly.

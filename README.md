# CharityMaps
&lt;Crack> the COVID-19 Crisis - It is a community based platform. Visit the website to know more.

> ## [Live Website Link](http://maps-charity-at.eu-gb.cf.appdomain.cloud/)


## Overview
---
### What is the problem?
In times of COVID-19 crisis, it is very important to help the needy in whatever way we can. Kindness and empathy makes a human being more humane. When a person is in dire need, one who is better provided than him must help the needy person with all sorts of support he can serve. This is what most us are doing in this pandemic by donating food and essential products to the poor and underprivileged people. But I want to draw the attention of readers towards few major problems that should be addressed to maintain calm environment during the panic:
* Some localities are not getting the appropriate help while few, which are easily reachable by people, are getting the resources.
* It happens that many people reach to distribute food and other resources in a place together. This results in more gathering in a particular place hence increases the risk of virus.

### How can technology help?
Our platform aims to solve the above mentioned problems related to distribution of food and other resources that various people, as well as organizations, are providing to the needy people these days. We aim to solve this by a platform where people before going out to distribute products, reserve the area (locality) in which they are willing to distribute. In this way, other people will get to know that the essential goods are already distributed in a particular area and they can distribute in some other locality. This will help there motive of distribution and will serve the real cause that 'No One' is without food.
Using our platform the chances of equal distribution of resources will increase highly and help will be reached to the needy. People can see, who is going to distribute the resources, where and when are they going to distribute, what type of resources are distributed in a particular region. So, people can plan their donations accordingly.

## Video
---
[![IMAGE Can't be loaded at the moment, but link is working properly.](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

## Solution Description
---
There is a proverb that goes like this, "a friend in need is a friend indeed'. But it can be said that a human in need is a human indeed. It is our duty as a human being and an Indian citizen that we help each other grow and thrive. Most of us are helping each other in best possible ways. We are donating food and other resources to the needy.

But we observed some shortcomings in the process of resources distribution. Few areas, which are easily accessible by people and organization are getting full support but few localities which are not easily reachable or which are not in lime-light, are not getting adequate help. Another major issue we observed is that unknowingly many people are going to distribute food and resources to a particular area at the same time. This leads to more crowd which in turn increases the risk of virus. 

To tackle these problem our platform *CharityMaps* comes. We tried to solve the problem in the following way:
* We developed a community-led platform that let the users to add and view information of the donations that other users provide.
* We aim that using our platform people even before going out to donate things get to know the location where other people have not donated things and is appropriate for donating essentials.
* They can collaborate and instead of visiting a place together, they schedule a safer visit according to their ease, minimizing the risk and keeping in mind proper social distancing measures. 
* They can also analyze that which products need to be distributed and which are already reached to the needy, to make a better decision and to make a real impact in the lives of underprivileged people.

We used following technologies in our project:
* IBM Cloud Foundry
* IBM Watson Assistant
* React JS Framework
* Spring Boot
* IBM Db2
* Here Maps

We created the frontend for our website using ‘React JS framework’ and integrated ‘Here Maps’ for displaying location. For backend, we created Rest APIs using ‘Spring Boot’ and the business logic that connects frontend and database ‘IBM Db2’. A chat bot is developed using ‘IBM Watson Assistant’ for assisting users on our website. The site is deployed on ‘IBM Cloud Foundry’. 

We haven’t found any solution similar to our website yet. We aim to reach out as many people as we can so that every needy person can get adequate essential resources in this crisis situation and can get proper help and support in coping with the pandemic.

> ### Home Page
![Image can't be loaded at the moment.](https://github.com/Abhinaay/CharityMaps/Images/Screenshot1.png "Home Page")

> ### Add Info Page (I)
![Image can't be loaded at the moment.](https://github.com/Abhinaay/CharityMaps/Images/Screenshot2.png "Add Info Page")

> ### Add Info Page (II)
![Image can't be loaded at the moment.](https://github.com/Abhinaay/CharityMaps/Images/Screenshot3.png "Add Info Page")

## SOLUTION ARCHITECTURE
---
![Image can't be loaded at the moment.](https://github.com/Abhinaay/CharityMaps/Images/SolutionArchitecture.png "Solution Architecture")

### How it works?
* When user visits the website and wants to add information regarding Donation places, he/she can click on add info button. This will direct the user to a new page wherein he/she will have to fill all the necessary details. 
* After submitting the information, a Rest API will be called and after the application of business logic the details will be added in the IBM Db2 database which is hosted on IBM cloud. 
* If the user wants to know the latest entries, he can get the same from Home Page. Home page loads the data from backend using another Rest API.
* Users can also opt for filter option to view the information according to city or day.
* If the user clicks on any one entry, then particular location will be showed on Maps (where a person would have donated or is going to donate). ‘Here Maps’ are used for the same.
* If the user have any queries he can ask from the chatbot (HOPE), which is linked with Watson Assistant. Watson Assistant uses natural language processing and machine learning to extract entities and intents of the user question and accordingly responds back. The answer is displayed on the user screen. 

## Future Scope
---
* Currently we just show the data that user (community) sends us but in future we will be extending this to book slots for donations.
* Using an in-house GIS (Geographic Information System) for locating and suggesting possible areas that are indeed slums and actually need help. 
* Watson assistant will be connected with Watson discovery which will access all the data entered by the user or from a third party. 
* Create more personalized feeds and notifications for the booking slots.
* Extend to third-party app integrations like WhatsApp, Facebook Messenger and Google Assistant.

## Disclosures
---
This Platform is intended to provide information based on community input i.e. the information provided by the public to help you make decisions for donating the essential products wisely and with proper awareness. We do not undertake any responsibility of the information provided on the platform. We totally depend on maturity of community and its trustworthiness.
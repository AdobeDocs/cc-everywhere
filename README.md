# CC Everywhere SDK

## Table of Contents
* [Overview](README.md)
* [Configuration](docs/configuration.md)
* [Local Development](docs/local_dev.md)
* [Quick Start](docs/quickstart.md)
* CCX Editor Component
  * [Create Project API](docs/create_project.md)
  * [Open Project API](docs/edit_project.md)
* [API References](docs/api_ref.md)
* [Customization](docs/customization.md)
#

CC Everywhere SDK is an easy-to-integrate, customizable, all-in-one JavaScript library that brings CC Express (CCX) capabilities to all applications. Designed to support web (and in the future, mobile) platforms, over time it will include live template generation and other modular building blocks for content-first, task-based creative tooling drawn from CCX. 
### What is CCX?
[Creative Cloud Express](https://www.adobe.com/express/)  (CCX) makes it easy to get started with thousands of beautiful templates, plus assets for social media content, logos, and more. Even without any design experience, CCX users can create standout content from wherever they work. 

This SDK allows you to integrate the following CCX components within your app: 

## 1. CCX Editor Component
  * [Create Project API](docs/create_project.md):
    * Launch a CCX editor to create a new design
    * Save design to CCX and my app
  * [Open Project API](docs/edit_project.md):
    * Launch a CCX editor to edit an old design
    * Save edited design to CCX and my app

### How do users experience the CCX editor modal:

After the user launches the CCX editor component upon any user interaction you specify (e.g. clicking a button), they must log in or create a CCX account. Users can access CCX's huge template and asset library and begin designing a new project. When they are done, they can click the **Save** button. The editor closes and the project is saved in CCX inside a folder with the 'appName' that the SDK is initialized with.

  
## 2. Quick Actions (Image) 
  * Crop Image
  * Convert JPEG/PNG
  * Image Filters
  * Resize Image
  * Remove Background

## 3. Quick Actions (Video)  
  * Change Speed
  * Convert to GIF/MP4
  * Crop Video
  * Merge Videos
  * Resize Video
  * Reverse Video
  * Trim Video


---



##  Get Started
1. Follow the steps in the [configuration page](docs/configuration.md) to sign up for an API key and register redirect URI patterns. 

2. Get started with the CC Everywhere SDK by following the steps in our [Quick Start](docs/quickstart.md) guide.



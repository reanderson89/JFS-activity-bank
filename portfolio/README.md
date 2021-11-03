# Create a Responsive Portfolio

For this activity you are going to use HTML, Bootstrap, and possibly some custom CSS to create a responsive portfolio. This should be built for both desktop and mobile screens.

[Here is an example of my first portfolio](https://reanderson89.github.io/responsive-portfolio/)

## Requirements
1. Your portfolio should have 3 separate html files. 
    - Example: 
    - `index.html` could be your "About Me" page since that is a good home page. 
    - `contact.html` could be used as a contact page.
    - `portfolio.html` could be used as the page where you display your projects.

2. You must have links to the other pages on EACH html page (think about using a navbar...)
3. Your "About Me" page must have a photo of yourself, and 2 separate paragraphs of content describing yourself.
4. Your "Contact" page must have a place where someone could input their name, email, and a message, and submit it. (it wont go anywhere...)
5. Your "Portfolio" page must contain at least 5+ images all evenly sized and spaced, each image should have a brief description.


## Walk-through

1. Start by creating a [NEW repo on github](https://www.github.com/new)
2. Clone the repo to your computer using `git clone <url>` DO NOT USE THE (git init) COMMAND. DON'T DO IT!!!
3. Create your starter html code
4. Link bootstrap
    - Go to [bootstraps webpage](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
    - Grab their CSS link, or copy it from here:  `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">`
    - Add the link to the `<head>` of your index.html, and all other html files you will use bootstrap in.
5. Make sure to set up your page using the proper grid of: container first, rows inside the container, cols inside the rows.
    - Here is an example 
    ```html
    <!-- You only need 1 container for your page -->
    <div class="container">
        <!-- You can have as many rows in a container that you would like -->
        <div class="row">
            <!-- You can have 12 cols in a row -->
            <div class="col">
                <!-- Content to be displayed to the page goes inside your 'col' divs -->
            </div>
        </div>
    </div>
    ```

## Your Goal!
- You should have created 3 separate html files within this portfolio project. 
- Each file should represent a certain page of your portfolio.
- You should show your knowledge of the various tools in bootstrap, you will find most of what you need in the categories highlighted in the image below.

![](./assets/categories.png)

## Where to submit your portfolio
[Go here to add your live URL next your name](https://docs.google.com/spreadsheets/d/1HCR4qc6XRoLH4LPd-vCFdZdcMZENNamadV_BgyD3jB8/edit?usp=sharing)


# Project: TCA Developments Website

## I. Overview

**Desciption:** TCA Developments & Consultant ltd. is a general contracting
company that specializes in commerical construction and rennovation.

**Author:** Tristan Deane <email>contact.alchemizedsoftware.com</email>

URL: https://www.tcadevelopments.com/

Current Version: **1.0.7**

## II. Analysis & Design

I've been commissioned to revamp TCA's existing website. My plan is to modernize
the site using mobile-first principles.

### Problems:

1. Styling and layout

The site layout is structured using <table> elements. This has created a
disappointing experience for mobile users.

The overall theme of the site is rather bland. Most of the images look generic
and do not convey a meaningful message. The color scheme needs an update. The
logo looks date and should be modernized.

Some of the links are broken and lead to an Adobe flash player error.

The navigation bar is currently oriented vertically. I would like it to be
displayed more prominently throughout the site.

The buttons are very confusing and don't standout. In fact I did not realize
they were buttons when I first visted the site. On first glance they do not look
interactive which creates a confusing experience. Users should not have to work
to access the site's content.

A site footer with copyright and social media links should be added.

2. Content

The entire websites content needs to be overhauled.

I. **Home:** Bland and should be completely overhauled.

**Solution:**

Create stacked sections that provide an overview of the other pages. Potentially
add a testimonial section at the bottom.

II. **About us:** Text is small and hard to read. Also contains a lot of
outdated information.

**Solution:**

Revamp the style and update the information.

III. **Services:** Add sections that offer a better description of the services
TCA provides.

**Solution:**

Provide more details about TCA's best services. Have smaller list that includes
the company's other services.

IV. **Clients:** page simply lists TCA's past clients and partnerships.

**Solution:**

Update the listing and perhaps include company logos. May just delete or combine
with the projects page.

V. Gallery page does not convey any information about past projects other than a
title and image of the clients name. Furthermore, all of the links on this page
are broken and throw an Adobe flash error.

**Solution:**

Convert page into a "projects" page that provides an overview of past jobs.

Clicking a job image should lead to another page that displays more information
about the specified job.

Some of this information should include:

- More pictures of the job site
- Clients name
- Job date
- Location
- Perhaps the category type of the job (ie. "commerical" or "hospital")
- Brief over of the job site and description of the work done by TCA.

The bottom of the page could include a "Related Projects" section that displays
additional projects (like Amazon related products).

VI. **Careers:** should contain more persuasive copy and also include a form.

**Solution:** Add a form that links to the hiring managers e-mail.

VII. **Contact:** only displays information and should be converted to a form.

**Solution:** Add a contact form that links to the company e-mail. This page
should also emphasis that job quote requests should go here.

## III. Version History

## Version 1.0.7:

Optimized the site content

Major:

- Added custom carousel controls to the template page and service page
  carousels. These new buttons are more visible than the previous controls.
- Updated the dimensions of the template page carousel images. They now properly
  fit the carousel slide.

Minor:

- Updated the nav header padding

Bugs:

- Fixed a positioning issue with the home page carousel on mobile. The image
  overlay was not properly adjusting to the smaller screen.

## Version 1.0.6:

Optimized the Services page.

Major:

- Refactored the modal carousels into a resuable component.
- Converted all images to nextgen format and refactored their containers into a
  resuable component

Minor:

- Update the styling of the "view more" buttons to reduce the contrast ratio.

## Version 1.0.5:

This update is focused on optimizing the website.

Major:

- Installed the React-Player package that enables the use of lazy loading a
  video player. This has drastically reduced the initial About page load time.
- Created a component that will try to use nextgen image formats (.webp) as the
  primary source. If the users browers can't handle this image type then the
  component will fallback to a legacy format (.jpg).
- Update the image file structure. There are now folders for legacy and nextgen
  images

## Version 1.0.4:

Refactored the project cards to address the alignment issues.

I converted the project images from <img> tags to background images contained
within a div. This seems to have fixed the alignment issues that have plagued
these cards.

In a future update I may refactor the template page carousel as well.

## Version 1.0.3:

Refactored the navbar, footer, and mobile navbar into separate components.

This new layout has made the App.js file much easier to navigate and also makes
the application compliant with the general styling of React apps.

## Version 1.0.2:

This update is concerned with optimizing the site. After performing a Google
page insight test, I found that the images were drastically effecting the page
load speed on mobile devices.

To address this issue, I will be implementing responsive images for the hero
carousel as well as any other large static images on the site.

Major:

- Modified the site's scss and css by moving the styling folders to the src
  directory. It turns out I didn't import the scss file and so the site was
  running off of an old css stylesheet! Ooops :(
  - Adding to the above, I have stopped using the live sass compiler as React
    allows you to import the .scss file as a module. Success!

Minor:

- Fixed a bug where the form message input was not clearing after submission.
- Added dimensions to the maple leaf icon
- Updated the Font awesome icons to rely on an npm package. This will remove the
  need to call a CDN.
- Adjusted styling of various site content

## Version 1.0.1:

Removed the project gallery controls per the client's request. As the site only
has 10 projects, we have deactivated the controls for now. Once we've added 20+
projects we will activate them.

Updated the site home page to reflect the newly secured site.

## Version 1.0.0:

This version features the official launch of the TCA site. I have successfully
recreated the site in react and everything is in working order.

The next step will be to deploy the site to the clients domain and run some
tests to ensure it is working correctly (I'm worried about the page refresh
error but that may just need a simple redirect).

Minor:

- Cleaned up numerous warnings from the website components.

## Version 0.18:

In this update I decided to migrate the TCA website to a React app. I made this
decision to have better control over the backend code and the project gallery.

I have everything working well except for finding an efficient way to import all
of the images in one go.

I should have it solved in the next patch.

## Version 0.17.2:

Updated the hero content to include more visually appealing images. Although
they're not TCA's, they make the site pop and mesh well with the hero text. I
believe that is the most important aspect.

## Version 0.17.1:

Updated the service cards on the home page as well as some content on the
services page.

## Version 0.17:

Refactored the home page hero content into a jumbotron slider. After researching
rival construction companies, I found that the vast majority had this feature.

This new addition should enhance the user experience by providing them with
multiple avenues to access the site's content.

Minor:

- Updated a majority of the site's cta buttons to include a chevron icon. I feel
  this makes them more visually appealing.

## Version 0.16.5:

Modified the service cards on the home page. Each card now acts as a link that
is tied to a specific section on the services page.

## Version 0.16.4:

Finished updating the featurette sections on the service page. The page now
features two new services and an updated projects area.

## Version 0.16.3:

This update includes major additions to the home, project, and service pages.

Major:

- Added images and details for all project cards.
- Implemented the logic for the project spotlight on the home page. It will now
  render projects with a feature value from the project data.

- Added a Miscellaneous button to the project gallery. This button should cover
  all projects not covered by the previous two.

- Began updating the featured service sections on the service page. The client
  has provided more content that has pushed me to redesign some of the page.

- Also a

## Version 0.16.2:

Overview: Refactored the project gallery page and project cards.

Major:

This update was primarily focused on the project page. As of now, I have
refactored the project gallery to include updated project cards and a full list
of TCA's clients.

During my tests, I found that the old cards did not look very interactive. This
meant that users would not realize these cards could be clicked to learn more
about a specified project.

The new cards clearly state that you can click them for more details. To further
aid this interactivity, I have also converted the entire card into a clickable
link. This should enhance the user experience on mobile devices as they will no
longer need to click the center of the card.

Minor:

- Updated the JavaScript "createProject" funciton to reflect the new card style.
- Added pictures for Skyview Dental clinic
- Added a full client list to the project gallery. I believe this will act as
  social proof for visitors who are unaware of TCA's history.

## Version 0.16.1:

Modified the client list slider. It now includes more clients, better styling,
and a longer duration.

The loop still needs to be smoother during the start and finish transitions. I
will attempt to modify this in a future patch.

## Version 0.16:

This update was focused on the site contact forms.

Major:

- All the site forms now submit to formspree.com. Currently they are linked to
  my e-mail address. However, I will update this once the site is ready for
  launch.
- Updated the form input fields. There is now an optional phone input
- Added input field icons for better clarity. Also updated the placeholder text
  to be more descriptive.

Minor:

- Also began implementing a client list auto-scroller. The goal is to have it
  display some of TCA's more prominent clients on a loop.

## Version 0.15.4:

This version features several content updates.

- Added copy text to several sections of the home page.
- Finished the service cards on the home page
- Updated the site font styles.
- Modified the CTA text of the home page hero section.

## Version 0.15.3:

Updated the service section of the home page.

Decided to try some different content for the service section. The former
content wasn't super interesting.

Now the section features a before and after comparison that is then followed by
a CTA.

This is a rough draft as the formatting of the last slide needs some work.

Overall, I feel this content is more engaging than the previous ones.

## Version 0.15.2:

Updated various aspects of the site's theme and content.

About:

- Changed the accordion colors to TCA blue.
- Updated Goodwill "thank you" paragraph.
- Changed the about heading tags to TCA blue

Services:

- Updated the positioning of the "Other Solutions" cards. They now stack
  vertically on smaller screens.

General:

- Changed all footer bg colors to TCA blue
- Modified the coloring of the site page banners to fit within overall color
  theme.

## Version 0.15.1:

Added first version of copy content to the service page and updated the styling
of the page.

## Version 0.15:

Updated the styling and various aspects of content throughout the site.

General:

- Added a favicon folder that will serve different sizes and types to various
  devices.

Home:

- Added a clients logo strip to the first section of the page. This will require
  the approval of the various clients before we can use their logos.
- Reduced the size of the hero image by 50%.
- Removed the descriptive text from the service cards at the request of the
  client
- Consolidated the Drywall and mudding cards into a general card.
- Added an HVAC card

About:

- Hid the core values section. The client and I felt it didn't fit the flow of
  the page.
- Removed the FAQ "our process" question
- Updated the spacing in the paragraphs
- Resized the group photo container so that the image will fluidly fill it

Services:

- Fixed a bug where the CTA buttons where not linking to the bottom contact
  form.

## Version 0.14.4:

Updated the colors of all primary buttons and the mobile nav to match the client
colors.

## Version 0.14.3:

This updated is concerned with styling and additional content.

Major:

- Added more content to the about page including a stock team photo and a team
  description.
- Updated the top navbar color to reflect the clients primary color.

Minor:

- Updated the address spacing for the contact page location card.
- Updated the section headers to reflect the client colors

## Version 0.14.2:

The previous update seems to have successfully resolved the "scroll-bounce" bug.
Therefore this update is rolling that solution out to the rest of the site.

I will do some final testing before offically putting thhis issue to rest.

Minor:

- Adjusted the text and size of the CTA button on the desktop nav.

## Version 0.14.1:

This update was mainly about addressing some persistent site layout issues.
Going forward I hope to route out all of these minor bugs.

Major: Updated the layout of the home page. After reviewing the code I found
that the various sections of the page had some margin issues. This may have been
causing the "scoll-bounce" bug.

Minor:

- Adjusted the font size of the footer h5's and the top nav banner span. They
  now look better on smaller screens.
- Adjusted the font size on the contact form button. Certain words are hidden on
  smaller screens for better formatting.

## Version 0.14:

Began updating the some of the site styling upon the request of the client.

Bugs:

Attempted to address the "scroll bounce" bug.

Previously the screen would "bounce" once a boundary was reached. I have added a
small change to the CSS that should address this issue. Further testing is
needed before I can confirm the bug has been patched.

## Version 0.13.5:

Added labels to the bottom mobile navbar. This should explicitly describe the
role of each button.

Updated the text content of the final section on the services page.

## Version 0.13.4:

Updated about.html

Major:

- Added an employee spotlight section. Currently, a youtube video of employee
  Rahim is featured.
- Team section will now display on the initial page render.
- Moved the FAQ section to the bottom of the page

Other site updates:

- Added a link to the alchemized website. The site is not up, but I felt it
  would be good to add now incase I forget later.
- Realigned the lead text on the project gallery page
- Updated some of the browers tab titles with more descriptive text

Known bugs: The services and project-pages have a layout issue. Currently the
main content does not extend the entire viewport width. This will be addressed
in a future update.

## Version 0.13.3:

Added a CTA to the top navbar. It will tranport the user directly to the contact
form on contact.html.

Updated the styling of the contact CTA buttons. The text uses more descriptive
language to entice the visitor to click.

## Version 0.13.2:

Main update: Disabled the fixed top navbar for now. I found too many layout
issues were stemming from it.

This has also solved the bug where the contact id bookmarks were not centering
properly on the forms.

Other updates: Modified the styling on several pages.

- About: now contains an FAQ section. It will still need to be filled with
  specific questions. I also may move it to the bottom of the page.
- Services: Modified the page styling.
- Project page: I missed updating the layout in the last patch. The page's
  structure now matches the rest of the site.

## Version 0.13.1:

Expanded the services.html layout. It now has a more sturctured user journey.
Upon arriving at the page, the user will be taken along a funnel that pushes
TCA's services.

I have broken up their services into three broad categories: office interior
rennovations, exterior services, and mechanical/electrical work. Each of these
sections lists it's niche services and a CTA button.

I have also included another contact form at the bottom of the page.

Known bugs:

I've finally tracked down the bug that was causing the viewport to jump passed
the contact form bookmark. To summarize the issue, when the user clicks on the
link, they're transported to the form. Upon arriving, the viewport always
overshoots the form.

I believe this is happening because of the fixed-top navigation bar. My guess is
that its presence is pushing the viewport past its intended destination.

The solution might simply involve adding a minimum height to the bookmark
target. This may compensate for the height of the navbar.

## Version 0.13:

Overhauled the index.html page design. It now acts as more of a landing page.
The vision for the page is to funnel the vistors into a free consultation.

Major features:

- A hero image that contains the company name and a call to action button.
- An expanded welcome section
- Services: recieved a styling update. The section now includes multiple cards
  that outline the major services of TCA.
- Projects: recieved a minor style update. In the future I'll make the projects
  standout more. Right now they don't look interactive.
- Testimonials: Updated the styling of the cards. They now contain some dummy
  reviews and a new rating system.
- Contact: Added a full form to the contact section. The leads should not have
  to leave the landing page to submit their request.

Minor features:

- Updated the styling of the sites other pages. The banners now contain a themed
  background color gradient.
- Footer: Updated the social icons and added a placeholder for the Alchemized
  logo. Also adjusted its padding.
- Converted the quote button in the sites banner into a phone number link.

Fixed Bugs:

- It appears I may have solved the issue of the site "bouncing" around on mobile
  screens. I believe this was occuring because the general layout of each page
  was not well thought out. I added a few div containers that should provide
  more structure. Further testing is needed before I'll know for sure.

Known Issues:

- The accordion on the about page does not center properly when its items
  expand. This causes content to jump on mobile screens. Will hopefully address
  this issues in the next update.

## Version 0.12.1:

Updated the styling of the about.html page. The page's main content is now
contained within an accordion component. This will ensure the user can quickly
navigate the pages various sections.

Note: The team section is still a work in progress. I have not finalized the
layout yet.

## Version 0.12:

Updated the service.html page to include rough draft of content. In the future,
the client will need to specify what they would like to change.

Updated the footer of the site to contain more information. It now includes:

- The company name as a header
- Contact information
- Social media links
- A back to the top button

On another note, the modifications to the footer seemed to have solved the
mobile nav bug. It no longer covers the footer text when the user scrolls to the
bottom of the page.

Finally, I added a small contact section on each page of the website. I believe
the more call's to action the user sees, the higher the conversion rate will be.

# Version 0.11.2:

Fixed a layout issue for the project gallery and individual project pages.
Originally, the project images were not rendering properly on smaller screens.
They were showing up way too small. Currently, I've added responsive breakpoints
on the images' parent containers. The containers now respond correctly to mobile
devices.

## Version 0.11.1:

Fixed a bug in the mobile bottom nav where the buttons were showing up
transparent in safari browsers. I had to nest each link in a button container
and pass the button styling onto the parent.

## Version 0.11:

Updated the styling of the contact.html location card. It now displays its
contents properly on both mobile and desktop.

I also implemented a new version of the fixed bottom mobile navbar. It now
contains a button group of icons that link to TCA's phone number, email, and
contact forms. I may need to reconfigure the quote button if it is not obvious
what the button's function is.

Unfortunately, I still have not configured the navbar to stop at the very bottom
of the website. I believe I will have to reconfigure the site footer anyway. So
I'll deal with this bug then.

## Version 0.10.1:

Updated the projects.html page to match the client specified categories.

## Version 0.10:

Modified the quote button styling and added a "mobile navbar". The new nav will
appear at a certain screen size. I chose to implement this to save screen space
in the site nav header.

Also began adding icons to the contact location card. Still needs some work.

## Version 0.9:

Began implementing an individual project-page html-template page. This page will
act as a standalone template for each of TCA's construction projects. My goal is
to render a specified project's properties into the various placeholders
throughout the template.

The user journey should be as follows:

1. The user clicks on a project link in the main project gallery (projects.html)
   or featured project spotlight(index.html).
2. The link will take the user to that project's specific page. Here they can
   view more of the project's details.

Using a template will cut down on the overall site size. I hope it will save me
valuable developmebt time. Who wants to create 20+ html pages? Not this guy
that's for sure.

## Version 0.8.1:

Updated the maple leaf icon to a red version.

Updated page footer to include Alchemized branding.

## Version 0.8:

Created a filter system for the project page. The projects can now be sorted by
various categories.

Modified the styling of the website.

## Version 0.7:

Began some overhaul behind the scenes. After starting the projects gallery, I
realized I needed to use soem basic JS. This lead to me eventually installing
webpack and babel to support ES6 modules.

Currently, I have some mock project objects that render to the gallery index.js.
They still need to be properly styled.

I also implemented a new style to the homepage welcome banner. I like the look
of it and I believe the client will too. Other styling choices include changing
the second navbar bg-color to match the site theme.

Finally, I have been learning the basics of SASS so that I can better understand
BootStrap. This has lead to the rework of the file system structure. The dist
folder - yes there is a dist folder now, I added webpack remember? - includes
the new source files for scss.

Sass has allowed me to begin consolidating all of my css styling into a central
folder. This will make it much easier to change the site themes from now on.

## Version 0.6.3:

The client requested that a second navbar be added to the top of the page. Its
purpose is to let users know that TCA is a Canadian business.

For the moment, this second bar is messing with the "fixed-top" functionality of
the original. I have disabled that feature until a solution is found.

## Version 0.6.2:

Updated nav theme to confrom with the new logo's color scheme. The new styling
is currently found on the git branch **nav-bar-white**

## Version 0.6.1:

Updated the rest of the site to include the new nav theme.

NOTE: The current logo is not optimized for the web. The graphic designer will
need to provide a copy with smaller dimensions (16x16, 32x32, 152x152).

## Version 0.6:

After recieving the company logo I found that it's colors clashed with the
navbar styling. So I created a new git branch with an updated site theme.

## Version 0.5.1:

Updated README.md to include the latest version of the website.

## Version 0.5:

Updated the websites general framework. The basic structure for the project,
service, and career pages is now available. This also means that the site's
navigation bar is now fully functional.

## Version 0.4:

Added a .gitignore file. The file system should be less bloated now.

Added about.html. The page briefly describes TCA's history, values, and
leadership team.

## Version 0.3:

Added embedded google maps feature to contact page. The map displays TCA's
office location.

Updated the index.html and contact.html styling. Contact page is now consistent
with the rest of the site.

### Version 0.0:

Added basic site file structure and began documenting site analysis & design
methodology.

Updated the navigation bar to a more modern version. Used mobile-first approach
and so the bar will expand or contract based on screen size. On smaller screens
it will convert to a "hamburger menu".

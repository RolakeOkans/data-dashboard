# Web Development Project 6 - Brewery Data Dashboard Part 2

Submitted by: **Rolake**

This web app: **An interactive brewery data dashboard built with React that fetches data from the Open Brewery DB API. Features include data visualizations, a searchable and filterable list, and a detail view for each brewery accessible via React Router.**

Time spent: **3** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **Clicking on an item in the list view displays more details about it**
  - [x] Clicking on an item in the dashboard list navigates to the detail view for that item
  - [x] Detail view includes extra information not included in the dashboard view (street address, phone, coordinates)
  - [x] The same sidebar is displayed in detail view as in dashboard view
- [x] **Each detail view of an item has a direct, unique link to that item's page**
- [x] **The app includes at least two unique charts developed using the fetched data**
  - [x] Pie chart showing breweries broken down by type
  - [x] Bar chart showing top 8 states by brewery count

The following **optional** features are implemented:

- [ ] The site's customized dashboard contains more content that explains what is interesting about the data
- [ ] The site allows users to toggle between different data visualizations

The following **additional** features are implemented:

* Search and filter from Part 1 are retained and work alongside the new features
* Results count updates dynamically based on search and filter

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://raw.githubusercontent.com/RolakeOkans/data-dashboard/main/dashboard_part2.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Kap

## Notes

The main challenges this week were learning React Router — specifically how to pass data between routes using props and how useParams extracts the ID from the URL. Installing and configuring Recharts was also new but the documentation made it straightforward once I understood the component structure.

## License

    Copyright 2026 Rolake

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

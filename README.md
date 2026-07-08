# Web Development Project 5 - Brewery Data Dashboard

Submitted by: **Rolake**

This web app: **A data dashboard that fetches and displays brewery data from the Open Brewery DB API. Users can search breweries by name, city, or state, and filter by brewery type. The dashboard also displays summary statistics about the fetched data.**

Time spent: **4.5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The site has a dashboard displaying a list of data fetched using an API call**
  - [x] The dashboard displays at least 10 unique items, one per row
  - [x] The dashboard includes at least two features in each row
  - [x] The useEffect() React hook and async/await syntax are used
- [x] **The app dashboard includes at least three summary statistics about the data**
  - [x] Total number of breweries displayed
  - [x] Number of unique states represented
  - [x] Number of microbreweries in the dataset
- [x] **A search bar allows the user to search for an item in the fetched data**
  - [x] The search bar correctly filters items in the list
  - [x] The list dynamically updates as the user types
- [x] **An additional filter allows the user to restrict displayed items by specified categories**
  - [x] The filter restricts items using brewery type (different attribute than search bar)
  - [x] The dashboard list dynamically updates as the user adjusts the filter

The following **optional** features are implemented:

- [x] Multiple filters can be applied simultaneously
- [ ] Filters use different input types
- [ ] User can enter specific bounds for filter values

The following **additional** features are implemented:

* Results count displays how many breweries match the current search and filter
* Each brewery row includes a clickable link to the brewery's website

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='https://raw.githubusercontent.com/RolakeOkans/data-dashboard/main/brewery%20dashboard.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with Kap

## Notes

The main challenge was learning how useEffect works differently from onClick — data fetches automatically when the page loads rather than waiting for user interaction. Combining search and filter simultaneously using chained .filter() calls was also a new pattern.

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

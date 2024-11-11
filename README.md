# WakaTime API Wrapper

A simple API wrapper for [WakaTime](https://wakatime.com) that provides easy access to generate visual representations and badges for tracking coding stats. This wrapper supports multiple types of charts and badges that allow developers to visualize and display their coding activity data effectively. These APIs are used by [Wakawaka GitHub Action](https://github.com/marketplace/actions/wakawaka-action), which shows cool charts and badges based on your Wakatime coding activity in your GitHub README. To know more, visit [Wakawaka - GitHub](https://github.com/aayush-goyal/wakawaka-action).

# Features

-   **Stats**: Generate shield badges based on various coding stats.
-   **Charts**: Visualize coding activity data in different chart formats.

# API Endpoints

The API provides two main types of data endpoints:
1.  **Stats**: Simple shield badges based on WakaTime data.
`/stats/{endpoint}?username=${wakaUsername}&token=${wakaToken}`
2.  **Charts**: Complex, visual representations of WakaTime data in different chart formats.
`/charts/${statType}?username=${wakaUsername}&range=${range}&chart_type=${chartType}&data_type=${dataType}&token=${wakaToken}`

## Supported Stats for Charts

The following stats are supported for charts:
-   **Categories** (e.g., coding, debugging)
-   **Editors** (e.g., VSCode, Sublime)
-   **Programming Languages** (e.g., Python, JavaScript)
-   **Operating Systems** (e.g., Windows, macOS)
-   **Projects** (user-defined projects on WakaTime)

## Supported Chart Types

The following chart types are currently available:
-   **Horizontal Bar Chart**
-   **Vertical Bar Chart**
-   **Pie Chart**
-   **Doughnut Chart**
-   **Nightingale Chart**

# Usage

Check out the [Swagger Docs](https://google.com) to know more about the API and how to use it. You can also play with this [Postman collection](https://google.com) to try out the API yourself.

Remember to get your Wakatime Token by visiting this link: [aayushgoyal.in - Wakawaka](https://aayushgoyal.in/wakawaka).

# License

This project is licensed under the [MIT License](https://opensource.org/license/mit) - see the [LICENSE](https://github.com/aayush-goyal/wakawaka/blob/master/LICENSE) file for details.

# Contact

For further questions, feel free to reach out via [GitHub Discussions](https://github.com/aayush-goyal/wakawaka/discussions/).

Let me know if you want further customization or any additional sections!
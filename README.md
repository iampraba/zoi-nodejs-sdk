# Zoho Office Integrator NodeJS SDK

[![NPM version](https://img.shields.io/npm/v/zoi-nodejs-sdk.svg)](https://www.npmjs.com/package/zoi-nodejs-sdk)
[![NPM downloads](https://img.shields.io/npm/dm/zoi-nodejs-sdk.svg)](https://www.npmjs.com/package/zoi-nodejs-sdk)

## Table Of Contents

* [Getting Started](#Getting-Started)
* [Registering a Zoho Office Integrator APIKey](#registering-a-zoho-office-integrator-apikey)
* [Environmental Setup](#environmental-setup)
* [Including the SDK in your project](#including-the-sdk-in-your-project)
* [Configuration](#configuration)
* [Initialization](#initializing-the-application)
* [Responses And Exceptions](#responses-and-exceptions)
* [Sample Code](#sdk-sample-code)
* [Release Notes](#release-notes)
* [License](#license)

## Getting Started

Zoho Office Integrator NodeJS SDK used to help you quickly integrator Zoho Office Integrator editors in side your web application.

## Registering a Zoho Office Integrator APIKey

Since Zoho Office Integrator APIs are authenticated with apikey, you should register your with Zoho to get an apikey. To register your app:

- Visit this page [https://officeintegrator.zoho.com/](https://officeintegrator.zoho.com). ( Sign-up for a Zoho Account if you don't have one)

- Enter your company name and short discription about how you are going to using zoho office integrator in your application. Choose the type of your application(commerial or non-commercial) and generate the apikey.

- After filling above details, create an account in Zoho Office Integrator service and copy the apikey from the dashboard.

## Environmental Setup

NodeJS SDK is installable through **npm**. **npm** is a tool for dependency management in NodeJS. SDK expects the following from the client app.

- Client app must have Node(version 12 and above)

- NodeJS SDK must be installed into client app through **npm**.

## Including the SDK in your project

You can include the SDK to your project using:

- Install **Node** from [nodejs.org](https://nodejs.org/en/download/) (if not installed).

- Install **NodeJS SDK**
    - Navigate to the workspace of your client app.
    - Run the command below:

    ```sh
    npm install zoi-nodejs-sdk
    ```
- The NodeJS SDK will be installed and a package named **/zoi-nodejs-sdk-1.*.*** will be created in the local machine.

- Another method to install the SDK
    - Add dependencies to the package.json of the node server with the latest version (recommended)
    - Run **npm install** in the directory which installs all the dependencies mentioned in package.json.

## Configuration

Before you get started with creating your NodeJS application, you need to register with Zoho Office Integrator to get an apikey for authentication. 

| Mandatory Keys    | Optional Keys |
| :---------------- | :------------ |
| user              | logger        |
| environment       |               |
| apikey            |               |
----

- Create an instance of **UserSignature** Class that identifies the current user(User who create the apikey).

    ```js
    const UserSignature = require( "zoi-nodejs-sdk-1.0.0/routes/user_signature").UserSignature;
    //Create an UserSignature instance that takes user Email as parameter
    let user = new UserSignature("praburaji93@gmail.com");
    ```

- Configure API environment which decides the domain and the URL to make API calls.

    ```js
    const Environment = require("zoi-nodejs-sdk/routes/dc/environment").Environment;
    /*
     * Configure the environment
     * Pass the below domain values based in which data center you signup for apikey. 
     * USDataCenter - https://api.office-integrator.com
     * EUDataCenter - https://api.office-integrator.eu
     * INDataCenter - https://api.office-integrator.in
     * CNDataCenter - https://api.office-integrator.com.cn
     * AUDataCenter - https://api.office-integrator.com.au
     * JPDataCenter - https://api.office-integrator.jp
    */
    let environment = new Environment("https://api.office-integrator.com", null, null);
    ```

- Create an instance of **[APIKey](models/authenticator/apikey.js)** with the information that you get after registering your Zoho client.

    ```js
    const APIKey = require("zoi-nodejs-sdk/models/authenticator/apikey").APIKey;
    const Constants = require("zoi-nodejs-sdk/utils/util/constants").Constants;

    /**
     * You can configure where the apikey needs to added in the requerst object.
     * User can either pass the apikey in the parameter(Constants.PARAMS) or (Constants.HEADERS)
     */
    let apikey = new APIKey("<your registered apikey>", Constants.PARAMS);
    //E.g: let apikey = new APIKey("2ae438cf864488657cc9754a27daa480", Constants.PARAMS);
    ```

- Create an instance of **Logger** Class to log exception and API information. By default, the SDK constructs a Logger instance with level - INFO and file_path - (sdk_logs.log parallel to node_modules)

    ```js
    const Levels = require("zoi-nodejs-sdk/routes/logger/logger").Levels;
    const LogBuilder = require("zoi-nodejs-sdk/routes/logger/log_builder").LogBuilder;

    /*
    * Create an instance of Logger Class that requires the following
    * level -> Level of the log messages to be logged. Can be configured by typing Levels "." and choose any level from the list displayed.
    * filePath -> Absolute file path, where messages need to be logged.
    */
    let logger = new LogBuilder()
        .level(Levels.INFO)
        .filePath("/Users/Documents/final-logs.txt")
        .build();
    ```

## Initializing the Application

Initialize the SDK using the following code.

```js
const Constants = require("zoi-nodejs-sdk/utils/util/constants").Constants;
const UserSignature = require("zoi-nodejs-sdk/routes/user_signature").UserSignature;
const Levels = require("zoi-nodejs-sdk/routes/logger/logger").Levels;
const LogBuilder = require("zoi-nodejs-sdk/routes/logger/log_builder").LogBuilder;
const Environment = require("zoi-nodejs-sdk/routes/dc/environment").Environment;
const InitializeBuilder = require("zoi-nodejs-sdk/routes/initialize_builder").InitializeBuilder;
const APIKey = require("zoi-nodejs-sdk/models/authenticator/apikey").APIKey;

class Initializer {
    static async initialize() {
        let user = new UserSignature("praburaji93@gmail.com");
        let environment = new Environment("https://api.office-integrator.com", null, null);
        let apikey = new APIKey("2ae438cf864488657cc9754a27daa480", Constants.PARAMS);
        let logger = new LogBuilder()
            .level(Levels.INFO)
            .filePath("./app.log")
            .build();
        let initialize = await new InitializeBuilder();

        await initialize.user(user).environment(environment).token(apikey).logger(logger).initialize();

        console.log("SDK initialized successfully.");
    }
}

Initializer.initialize();
```

- You can now access the functionalities of the SDK. Refer to the sample codes to make various API calls through the SDK.

## Responses and Exceptions

All SDK method calls return an instance of **[APIResponse](routes/controllers/api_response.js)**.

After a successful API request, the **getObject()** method returns an instance of the ResponseWrapper (for **GET**) or the ActionWrapper (for **POST, PUT, DELETE**).

Whenever the API returns an error response, the **getObject()** returns an instance of **APIException** class.

**ResponseWrapper** (for **GET** requests) and ActionWrapper (for **POST, PUT, DELETE** requests) are the expected objects for Zoho Office Integrator APIs’ responses

### GET Requests

- The **getObject()** returns instance of one of the following classes, based on the return type.
    - For  **application/json** responses
        - **SessionInfo**
        - **InvaildConfigurationException**

### POST, PUT, DELETE Requests

- The **getObject()** returns instance of one of the following classes
    - **CreateDocumentResponse**
    - **CreateSheetResponse**
    - **InvaildConfigurationException**

All other exceptions such as SDK anomalies and other unexpected behaviours are thrown under the **[SDKException](core/com/zoho/crm/api/exception/sdk_exception.js)** class.

## SDK Sample code

Make sure you have [intialized the sdk](#initializing-the-application) before running below sample code snippet.


```js

const V1Operations = require("zoi-nodejs-sdk/core/com/zoho/crm/api/officeintegrator/v1/v1_operations").V1Operations;
const CreateDocumentParameters = require("zoi-nodejs-sdk/core/com/zoho/crm/api/officeintegrator/v1/create_document_parameters").CreateDocumentParameters;

class ZohoWriter {

    static async createDocument() {
        try {
            var sdk_operations = new V1Operations();
            var create_document_parameters = new CreateDocumentParameters();

            var writer_response = await sdk_operations.createDocument(create_document_parameters);

            console.log(writer_response);
        } catch (error) {
            console.log(error);
        }
    }
}

ZohoWriter.createDocument();
```

Refer this **[repository](https://github.com/iampraba/zoi-nodejs-sdk-demo-app)** for example codes to all Office Integrator API endpoints.


## Release Notes

*Version 1.1.0*

- [Get all writer document session](https://www.zoho.com/officeintegrator/api/v1/zoho-writer-get-document-sessions.html) information api support added
- [Spreadsheet](https://www.zoho.com/officeintegrator/api/v1/sheet-conversion-api.html) and [Presentation](https://www.zoho.com/officeintegrator/api/v1/show-conversion-api.html) conversion api endpoint support added
- Language parameter support added for [create document api](https://www.zoho.com/officeintegrator/api/v1/zoho-writer-create-document.html#doc_defaults) endpoint document defaults parameter.
- Package renamed to *\*/core/com/zoho/crm/api/officeintegrator/v1/\** from *\*/core/com/zoho/crm/api/officeintegrator/officeintegratorsdk/\**. If your application has [zoi-nodejs-sdk]([url](https://www.npmjs.com/package/zoi-nodejs-sdk)) version below **1.1.0**, please check  your application code and update with above package name as mentioned above.
- API ResponseWrapper changed to service specific response wrappers.
    - ZohoWriter api's(/writer/*) will return WriterResponseWrapper instead of ResponseWrapper object.
    - ZohoSheet api's(/sheet/*) will return SheetResponseWrapper instead of ResponseWrapper object.
    - ZohoShow api's(/show/*) will return SheetResponseWrapper instead of ResponseWrapper object.

## License

This SDK is distributed under the [Apache License, Version 2.0](http://www.apache.org/licenses/LICENSE-2.0), see LICENSE.txt for more information.

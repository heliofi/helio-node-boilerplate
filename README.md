> Helio backend boilerplate for Nodejs applications

The boilerplate comprises two submodules: packages/common and packages/api.

The common module can be published as NPM package and used as SDK for the API project.
This contains types, common methods, DTOs and entities.

The api package contains API logic weather GraphQL or REST.

In order to build the common package run:

```shell
yarn build
```

in the root of the project.

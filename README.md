# \<ethjs-contract\>

A Web Component that fetches an Ethereum contracts ABI and exposes a contract instance.

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) and npm (packaged with [Node.js](https://nodejs.org)) installed. Run `npm install` to install your element's dependencies, then run `polymer serve` to serve your element locally.

## Install ethjs-element

```
$ npm install ethjs-contract
```

## Viewing Your Element

```
$ polymer serve
```

```
$ import 'ethjs-contract';
```

## Basic Use

```html
<ethjs-contract  
    contract-address="0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359"
    contract-instance="{{contract}}">
</ethjs-contract>
```

## Advanced Use

```html
<ethjs-contract  
    main-net
    contract-address="0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359"
    public-key="0xfb6916095ca1df60bb79ce92ce3ea74c37c5d359"
    contract-instance="{{contract}}">
</ethjs-contract>
```



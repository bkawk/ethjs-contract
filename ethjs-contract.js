import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'ethjs-element';

/**
 * `ethjs-contract`
 * A Web Component that fetches an Ethereum contracts ABI and exposes a contract instance.
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class EthjsContract extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <ethjs-element eth="{{eth}}"></ethjs-element></ethjs-element>
    `;
  }
  static get properties() {
    return {
      eth: {
        type: Object,
      },
      contractAddress: {
        type: String,
        observer: '_start'
      },
      publicKey: {
        type: String,
      },
      mainNet: {
        type: Boolean,
        value: false,
      },
      contractInstance: {
        type: Object,
        notify: true,
        reflectToAttribute: true
      }
    };
  }

  _start(){
    this._fetchAbi(this.contractAddress)
    .then((contractAbi) => {
      if(this.publicKey){
        this.contractInstance = this.eth.contract(contractAbi).at(this.publicKey);
      } else {
        this.contractInstance = this.eth.contract(contractAbi);
      }
    })
    .catch((error) => {
      reject(error);
    });
    
  }

  _fetchAbi(address){
    return new Promise((resolve, reject) => {
      let net = '';
      if(this.mainNet){
        net = 'api';
      } else {
        net = 'ropsten';
      }
      fetch(`https://${net}.etherscan.io/api?module=contract&action=getabi&address=${address}`)
      .then((response) => {
        resolve(response.json());
      })
      .catch((error) => {
        reject(error);
      });
    })
  }

} window.customElements.define('ethjs-contract', EthjsContract);

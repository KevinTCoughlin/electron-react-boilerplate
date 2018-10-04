import React from 'react';
import { GraphFileBrowser } from '@microsoft/file-browser';

// Replace with valid access_token for Microsoft Graph authentication.
// See https://developer.microsoft.com/en-us/graph/graph-explorer. An access_token
// is available once signed-in for developing / prototyping.
// Reference: https://developer.microsoft.com/en-us/graph/docs/concepts/auth_overview
const ACCESS_TOKEN = '<access_token>';

export default class App extends React.Component {
  static getAuthenticationToken() {
    return new Promise(resolve => {
      resolve(ACCESS_TOKEN);
    });
  }

  render() {
    return (
      <GraphFileBrowser
        getAuthenticationToken={App.getAuthenticationToken}
        onSuccess={selectedKeys => console.log(selectedKeys)}
        onCancel={err => console.log(err.message)}
      />
    );
  }
}

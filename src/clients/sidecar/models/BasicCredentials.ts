/* tslint:disable */
/* eslint-disable */
/**
 * Confluent ide-sidecar API
 * API for the Confluent ide-sidecar, part of Confluent for VS Code
 *
 * The version of the OpenAPI document: 0.168.0
 * Contact: vscode@confluent.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
/**
 * Basic authentication credentials
 * @export
 * @interface BasicCredentials
 */
export interface BasicCredentials {
  /**
   * The username to use when connecting to the external service.
   * @type {string}
   * @memberof BasicCredentials
   */
  username: string;
  /**
   * The password to use when connecting to the external service.
   * @type {string}
   * @memberof BasicCredentials
   */
  password: string;
}

/**
 * Check if a given object implements the BasicCredentials interface.
 */
export function instanceOfBasicCredentials(value: object): value is BasicCredentials {
  if (!("username" in value) || value["username"] === undefined) return false;
  if (!("password" in value) || value["password"] === undefined) return false;
  return true;
}

export function BasicCredentialsFromJSON(json: any): BasicCredentials {
  return BasicCredentialsFromJSONTyped(json, false);
}

export function BasicCredentialsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): BasicCredentials {
  if (json == null) {
    return json;
  }
  return {
    username: json["username"],
    password: json["password"],
  };
}

export function BasicCredentialsToJSON(json: any): BasicCredentials {
  return BasicCredentialsToJSONTyped(json, false);
}

export function BasicCredentialsToJSONTyped(
  value?: BasicCredentials | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    username: value["username"],
    password: value["password"],
  };
}

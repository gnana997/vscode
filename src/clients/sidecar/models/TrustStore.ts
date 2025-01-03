/* tslint:disable */
/* eslint-disable */
/**
 * Confluent ide-sidecar API
 * API for the Confluent ide-sidecar, part of Confluent for VS Code
 *
 * The version of the OpenAPI document: 1.0.1
 * Contact: vscode@confluent.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { StoreType } from "./StoreType";
import {
  StoreTypeFromJSON,
  StoreTypeFromJSONTyped,
  StoreTypeToJSON,
  StoreTypeToJSONTyped,
} from "./StoreType";

/**
 *
 * @export
 * @interface TrustStore
 */
export interface TrustStore {
  /**
   * The path to the local trust store file. Required for authenticating the server's certificate.
   * @type {string}
   * @memberof TrustStore
   */
  path: string;
  /**
   * The password for the local trust store file. If a password is not set, trust store file configured will still be used, but integrity checking is disabled. A trust store password is not supported for PEM format.
   * @type {string}
   * @memberof TrustStore
   */
  password?: string | null;
  /**
   * The file format of the local trust store file
   * @type {StoreType}
   * @memberof TrustStore
   */
  type?: StoreType | null;
}

/**
 * Check if a given object implements the TrustStore interface.
 */
export function instanceOfTrustStore(value: object): value is TrustStore {
  if (!("path" in value) || value["path"] === undefined) return false;
  return true;
}

export function TrustStoreFromJSON(json: any): TrustStore {
  return TrustStoreFromJSONTyped(json, false);
}

export function TrustStoreFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrustStore {
  if (json == null) {
    return json;
  }
  return {
    path: json["path"],
    password: json["password"] == null ? undefined : json["password"],
    type: json["type"] == null ? undefined : StoreTypeFromJSON(json["type"]),
  };
}

export function TrustStoreToJSON(json: any): TrustStore {
  return TrustStoreToJSONTyped(json, false);
}

export function TrustStoreToJSONTyped(
  value?: TrustStore | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    path: value["path"],
    password: value["password"],
    type: StoreTypeToJSON(value["type"]),
  };
}

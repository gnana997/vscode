/* tslint:disable */
/* eslint-disable */
/**
 * Confluent ide-sidecar API
 * API for the Confluent ide-sidecar, part of Confluent for VS Code
 *
 * The version of the OpenAPI document: 0.173.0
 * Contact: vscode@confluent.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { TrustStore } from "./TrustStore";
import {
  TrustStoreFromJSON,
  TrustStoreFromJSONTyped,
  TrustStoreToJSON,
  TrustStoreToJSONTyped,
} from "./TrustStore";
import type { KeyStore } from "./KeyStore";
import {
  KeyStoreFromJSON,
  KeyStoreFromJSONTyped,
  KeyStoreToJSON,
  KeyStoreToJSONTyped,
} from "./KeyStore";

/**
 * SSL configuration
 * @export
 * @interface TLSConfig
 */
export interface TLSConfig {
  /**
   * Whether to verify the server certificate hostname. Defaults to true if not set.
   * @type {boolean}
   * @memberof TLSConfig
   */
  verify_hostname?: boolean;
  /**
   * Whether SSL is enabled. If not set, defaults to true.
   * @type {boolean}
   * @memberof TLSConfig
   */
  enabled: boolean;
  /**
   * The trust store configuration for authenticating the server's certificate.
   * @type {TrustStore}
   * @memberof TLSConfig
   */
  truststore?: TrustStore | null;
  /**
   * The key store configuration that will identify and authenticate the client to the server, required for mutual TLS (mTLS)
   * @type {KeyStore}
   * @memberof TLSConfig
   */
  keystore?: KeyStore | null;
}

/**
 * Check if a given object implements the TLSConfig interface.
 */
export function instanceOfTLSConfig(value: object): value is TLSConfig {
  if (!("enabled" in value) || value["enabled"] === undefined) return false;
  return true;
}

export function TLSConfigFromJSON(json: any): TLSConfig {
  return TLSConfigFromJSONTyped(json, false);
}

export function TLSConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLSConfig {
  if (json == null) {
    return json;
  }
  return {
    verify_hostname: json["verify_hostname"] == null ? undefined : json["verify_hostname"],
    enabled: json["enabled"],
    truststore: json["truststore"] == null ? undefined : TrustStoreFromJSON(json["truststore"]),
    keystore: json["keystore"] == null ? undefined : KeyStoreFromJSON(json["keystore"]),
  };
}

export function TLSConfigToJSON(json: any): TLSConfig {
  return TLSConfigToJSONTyped(json, false);
}

export function TLSConfigToJSONTyped(
  value?: TLSConfig | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    verify_hostname: value["verify_hostname"],
    enabled: value["enabled"],
    truststore: TrustStoreToJSON(value["truststore"]),
    keystore: KeyStoreToJSON(value["keystore"]),
  };
}

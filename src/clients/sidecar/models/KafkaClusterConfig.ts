/* tslint:disable */
/* eslint-disable */
/**
 * Confluent ide-sidecar API
 * API for the Confluent ide-sidecar, part of Confluent for VS Code
 *
 * The version of the OpenAPI document: 0.179.0
 * Contact: vscode@confluent.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { TLSConfig } from "./TLSConfig";
import {
  TLSConfigFromJSON,
  TLSConfigFromJSONTyped,
  TLSConfigToJSON,
  TLSConfigToJSONTyped,
} from "./TLSConfig";
import type { KafkaClusterConfigCredentials } from "./KafkaClusterConfigCredentials";
import {
  KafkaClusterConfigCredentialsFromJSON,
  KafkaClusterConfigCredentialsFromJSONTyped,
  KafkaClusterConfigCredentialsToJSON,
  KafkaClusterConfigCredentialsToJSONTyped,
} from "./KafkaClusterConfigCredentials";

/**
 * Kafka cluster configuration.
 * @export
 * @interface KafkaClusterConfig
 */
export interface KafkaClusterConfig {
  /**
   * A list of host/port pairs to use for establishing the initial connection to the Kafka cluster.
   * @type {string}
   * @memberof KafkaClusterConfig
   */
  bootstrap_servers: string;
  /**
   *
   * @type {KafkaClusterConfigCredentials}
   * @memberof KafkaClusterConfig
   */
  credentials?: KafkaClusterConfigCredentials | null;
  /**
   * The SSL configuration for connecting to the Kafka cluster. To disable, set `enabled` to false. To use the default SSL settings, set `enabled` to true and leave the `truststore` and `keystore` fields unset.
   * @type {TLSConfig}
   * @memberof KafkaClusterConfig
   */
  ssl?: TLSConfig | null;
}

/**
 * Check if a given object implements the KafkaClusterConfig interface.
 */
export function instanceOfKafkaClusterConfig(value: object): value is KafkaClusterConfig {
  if (!("bootstrap_servers" in value) || value["bootstrap_servers"] === undefined) return false;
  return true;
}

export function KafkaClusterConfigFromJSON(json: any): KafkaClusterConfig {
  return KafkaClusterConfigFromJSONTyped(json, false);
}

export function KafkaClusterConfigFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): KafkaClusterConfig {
  if (json == null) {
    return json;
  }
  return {
    bootstrap_servers: json["bootstrap_servers"],
    credentials:
      json["credentials"] == null
        ? undefined
        : KafkaClusterConfigCredentialsFromJSON(json["credentials"]),
    ssl: json["ssl"] == null ? undefined : TLSConfigFromJSON(json["ssl"]),
  };
}

export function KafkaClusterConfigToJSON(json: any): KafkaClusterConfig {
  return KafkaClusterConfigToJSONTyped(json, false);
}

export function KafkaClusterConfigToJSONTyped(
  value?: KafkaClusterConfig | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    bootstrap_servers: value["bootstrap_servers"],
    credentials: KafkaClusterConfigCredentialsToJSON(value["credentials"]),
    ssl: TLSConfigToJSON(value["ssl"]),
  };
}

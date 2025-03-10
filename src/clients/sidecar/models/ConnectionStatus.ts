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
import type { SchemaRegistryStatus } from "./SchemaRegistryStatus";
import {
  SchemaRegistryStatusFromJSON,
  SchemaRegistryStatusFromJSONTyped,
  SchemaRegistryStatusToJSON,
  SchemaRegistryStatusToJSONTyped,
} from "./SchemaRegistryStatus";
import type { Authentication } from "./Authentication";
import {
  AuthenticationFromJSON,
  AuthenticationFromJSONTyped,
  AuthenticationToJSON,
  AuthenticationToJSONTyped,
} from "./Authentication";
import type { CCloudStatus } from "./CCloudStatus";
import {
  CCloudStatusFromJSON,
  CCloudStatusFromJSONTyped,
  CCloudStatusToJSON,
  CCloudStatusToJSONTyped,
} from "./CCloudStatus";
import type { KafkaClusterStatus } from "./KafkaClusterStatus";
import {
  KafkaClusterStatusFromJSON,
  KafkaClusterStatusFromJSONTyped,
  KafkaClusterStatusToJSON,
  KafkaClusterStatusToJSONTyped,
} from "./KafkaClusterStatus";

/**
 *
 * @export
 * @interface ConnectionStatus
 */
export interface ConnectionStatus {
  /**
   *
   * @type {CCloudStatus}
   * @memberof ConnectionStatus
   */
  ccloud?: CCloudStatus;
  /**
   *
   * @type {KafkaClusterStatus}
   * @memberof ConnectionStatus
   */
  kafka_cluster?: KafkaClusterStatus;
  /**
   *
   * @type {SchemaRegistryStatus}
   * @memberof ConnectionStatus
   */
  schema_registry?: SchemaRegistryStatus;
  /**
   *
   * @type {Authentication}
   * @memberof ConnectionStatus
   */
  authentication: Authentication;
}

/**
 * Check if a given object implements the ConnectionStatus interface.
 */
export function instanceOfConnectionStatus(value: object): value is ConnectionStatus {
  if (!("authentication" in value) || value["authentication"] === undefined) return false;
  return true;
}

export function ConnectionStatusFromJSON(json: any): ConnectionStatus {
  return ConnectionStatusFromJSONTyped(json, false);
}

export function ConnectionStatusFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ConnectionStatus {
  if (json == null) {
    return json;
  }
  return {
    ccloud: json["ccloud"] == null ? undefined : CCloudStatusFromJSON(json["ccloud"]),
    kafka_cluster:
      json["kafka_cluster"] == null ? undefined : KafkaClusterStatusFromJSON(json["kafka_cluster"]),
    schema_registry:
      json["schema_registry"] == null
        ? undefined
        : SchemaRegistryStatusFromJSON(json["schema_registry"]),
    authentication: AuthenticationFromJSON(json["authentication"]),
  };
}

export function ConnectionStatusToJSON(json: any): ConnectionStatus {
  return ConnectionStatusToJSONTyped(json, false);
}

export function ConnectionStatusToJSONTyped(
  value?: ConnectionStatus | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    ccloud: CCloudStatusToJSON(value["ccloud"]),
    kafka_cluster: KafkaClusterStatusToJSON(value["kafka_cluster"]),
    schema_registry: SchemaRegistryStatusToJSON(value["schema_registry"]),
    authentication: AuthenticationToJSON(value["authentication"]),
  };
}

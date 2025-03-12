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
import type { AuthErrors } from "./AuthErrors";
import {
  AuthErrorsFromJSON,
  AuthErrorsFromJSONTyped,
  AuthErrorsToJSON,
  AuthErrorsToJSONTyped,
} from "./AuthErrors";
import type { ConnectedState } from "./ConnectedState";
import {
  ConnectedStateFromJSON,
  ConnectedStateFromJSONTyped,
  ConnectedStateToJSON,
  ConnectedStateToJSONTyped,
} from "./ConnectedState";
import type { UserInfo } from "./UserInfo";
import {
  UserInfoFromJSON,
  UserInfoFromJSONTyped,
  UserInfoToJSON,
  UserInfoToJSONTyped,
} from "./UserInfo";

/**
 * The status related to the specified Kafka cluster.
 * @export
 * @interface KafkaClusterStatus
 */
export interface KafkaClusterStatus {
  /**
   * The state of the connection to the Kafka cluster.
   * @type {ConnectedState}
   * @memberof KafkaClusterStatus
   */
  state: ConnectedState;
  /**
   * Information about the authenticated principal, if known.
   * @type {UserInfo}
   * @memberof KafkaClusterStatus
   */
  user?: UserInfo;
  /**
   * Errors related to the connection to the Kafka cluster.
   * @type {AuthErrors}
   * @memberof KafkaClusterStatus
   */
  errors?: AuthErrors;
}

/**
 * Check if a given object implements the KafkaClusterStatus interface.
 */
export function instanceOfKafkaClusterStatus(value: object): value is KafkaClusterStatus {
  if (!("state" in value) || value["state"] === undefined) return false;
  return true;
}

export function KafkaClusterStatusFromJSON(json: any): KafkaClusterStatus {
  return KafkaClusterStatusFromJSONTyped(json, false);
}

export function KafkaClusterStatusFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): KafkaClusterStatus {
  if (json == null) {
    return json;
  }
  return {
    state: ConnectedStateFromJSON(json["state"]),
    user: json["user"] == null ? undefined : UserInfoFromJSON(json["user"]),
    errors: json["errors"] == null ? undefined : AuthErrorsFromJSON(json["errors"]),
  };
}

export function KafkaClusterStatusToJSON(json: any): KafkaClusterStatus {
  return KafkaClusterStatusToJSONTyped(json, false);
}

export function KafkaClusterStatusToJSONTyped(
  value?: KafkaClusterStatus | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    state: ConnectedStateToJSON(value["state"]),
    user: UserInfoToJSON(value["user"]),
    errors: AuthErrorsToJSON(value["errors"]),
  };
}

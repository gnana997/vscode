/* tslint:disable */
/* eslint-disable */
/**
 * Confluent ide-sidecar API
 * API for the Confluent ide-sidecar, part of Confluent for VS Code
 *
 * The version of the OpenAPI document: 0.174.0
 * Contact: vscode@confluent.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { Status } from "./Status";
import { StatusFromJSON, StatusFromJSONTyped, StatusToJSON, StatusToJSONTyped } from "./Status";
import type { AuthErrors } from "./AuthErrors";
import {
  AuthErrorsFromJSON,
  AuthErrorsFromJSONTyped,
  AuthErrorsToJSON,
  AuthErrorsToJSONTyped,
} from "./AuthErrors";
import type { UserInfo } from "./UserInfo";
import {
  UserInfoFromJSON,
  UserInfoFromJSONTyped,
  UserInfoToJSON,
  UserInfoToJSONTyped,
} from "./UserInfo";

/**
 * The authentication-related status (deprecated).
 * @export
 * @interface Authentication
 */
export interface Authentication {
  /**
   *
   * @type {Status}
   * @memberof Authentication
   */
  status: Status;
  /**
   *
   * @type {Date}
   * @memberof Authentication
   */
  requires_authentication_at?: Date;
  /**
   *
   * @type {UserInfo}
   * @memberof Authentication
   */
  user?: UserInfo;
  /**
   *
   * @type {AuthErrors}
   * @memberof Authentication
   */
  errors?: AuthErrors;
}

/**
 * Check if a given object implements the Authentication interface.
 */
export function instanceOfAuthentication(value: object): value is Authentication {
  if (!("status" in value) || value["status"] === undefined) return false;
  return true;
}

export function AuthenticationFromJSON(json: any): Authentication {
  return AuthenticationFromJSONTyped(json, false);
}

export function AuthenticationFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): Authentication {
  if (json == null) {
    return json;
  }
  return {
    status: StatusFromJSON(json["status"]),
    requires_authentication_at:
      json["requires_authentication_at"] == null
        ? undefined
        : new Date(json["requires_authentication_at"]),
    user: json["user"] == null ? undefined : UserInfoFromJSON(json["user"]),
    errors: json["errors"] == null ? undefined : AuthErrorsFromJSON(json["errors"]),
  };
}

export function AuthenticationToJSON(json: any): Authentication {
  return AuthenticationToJSONTyped(json, false);
}

export function AuthenticationToJSONTyped(
  value?: Authentication | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    status: StatusToJSON(value["status"]),
    requires_authentication_at:
      value["requires_authentication_at"] == null
        ? undefined
        : value["requires_authentication_at"].toISOString(),
    user: UserInfoToJSON(value["user"]),
    errors: AuthErrorsToJSON(value["errors"]),
  };
}

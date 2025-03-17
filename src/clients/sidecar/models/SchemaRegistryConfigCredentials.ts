/* tslint:disable */
/* eslint-disable */
/**
 * Confluent ide-sidecar API
 * API for the Confluent ide-sidecar, part of Confluent for VS Code
 *
 * The version of the OpenAPI document: 0.177.0
 * Contact: vscode@confluent.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import type { ApiKeyAndSecret } from "./ApiKeyAndSecret";
import {
  instanceOfApiKeyAndSecret,
  ApiKeyAndSecretFromJSON,
  ApiKeyAndSecretFromJSONTyped,
  ApiKeyAndSecretToJSON,
} from "./ApiKeyAndSecret";
import type { BasicCredentials } from "./BasicCredentials";
import {
  instanceOfBasicCredentials,
  BasicCredentialsFromJSON,
  BasicCredentialsFromJSONTyped,
  BasicCredentialsToJSON,
} from "./BasicCredentials";
import type { OAuthCredentials } from "./OAuthCredentials";
import {
  instanceOfOAuthCredentials,
  OAuthCredentialsFromJSON,
  OAuthCredentialsFromJSONTyped,
  OAuthCredentialsToJSON,
} from "./OAuthCredentials";

/**
 * @type SchemaRegistryConfigCredentials
 * The credentials for the Schema Registry, or null if no authentication is required
 * @export
 */
export type SchemaRegistryConfigCredentials = ApiKeyAndSecret | BasicCredentials | OAuthCredentials;

export function SchemaRegistryConfigCredentialsFromJSON(
  json: any,
): SchemaRegistryConfigCredentials {
  return SchemaRegistryConfigCredentialsFromJSONTyped(json, false);
}

export function SchemaRegistryConfigCredentialsFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): SchemaRegistryConfigCredentials {
  if (json == null) {
    return json;
  }
  if (instanceOfApiKeyAndSecret(json)) {
    return ApiKeyAndSecretFromJSONTyped(json, true);
  }
  if (instanceOfBasicCredentials(json)) {
    return BasicCredentialsFromJSONTyped(json, true);
  }
  if (instanceOfOAuthCredentials(json)) {
    return OAuthCredentialsFromJSONTyped(json, true);
  }

  return {} as any;
}

export function SchemaRegistryConfigCredentialsToJSON(json: any): any {
  return SchemaRegistryConfigCredentialsToJSONTyped(json, false);
}

export function SchemaRegistryConfigCredentialsToJSONTyped(
  value?: SchemaRegistryConfigCredentials | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  if (instanceOfApiKeyAndSecret(value)) {
    return ApiKeyAndSecretToJSON(value as ApiKeyAndSecret);
  }
  if (instanceOfBasicCredentials(value)) {
    return BasicCredentialsToJSON(value as BasicCredentials);
  }
  if (instanceOfOAuthCredentials(value)) {
    return OAuthCredentialsToJSON(value as OAuthCredentials);
  }

  return {};
}

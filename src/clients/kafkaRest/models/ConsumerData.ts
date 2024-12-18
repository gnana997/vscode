/* tslint:disable */
/* eslint-disable */
/**
 * REST Admin API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 3.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { Relationship } from "./Relationship";
import {
  RelationshipFromJSON,
  RelationshipFromJSONTyped,
  RelationshipToJSON,
  RelationshipToJSONTyped,
} from "./Relationship";
import type { ResourceMetadata } from "./ResourceMetadata";
import {
  ResourceMetadataFromJSON,
  ResourceMetadataFromJSONTyped,
  ResourceMetadataToJSON,
  ResourceMetadataToJSONTyped,
} from "./ResourceMetadata";

/**
 *
 * @export
 * @interface ConsumerData
 */
export interface ConsumerData {
  /**
   *
   * @type {string}
   * @memberof ConsumerData
   */
  kind: string;
  /**
   *
   * @type {ResourceMetadata}
   * @memberof ConsumerData
   */
  metadata: ResourceMetadata;
  /**
   *
   * @type {string}
   * @memberof ConsumerData
   */
  cluster_id: string;
  /**
   *
   * @type {string}
   * @memberof ConsumerData
   */
  consumer_group_id: string;
  /**
   *
   * @type {string}
   * @memberof ConsumerData
   */
  consumer_id: string;
  /**
   *
   * @type {string}
   * @memberof ConsumerData
   */
  instance_id?: string | null;
  /**
   *
   * @type {string}
   * @memberof ConsumerData
   */
  client_id: string;
  /**
   *
   * @type {Relationship}
   * @memberof ConsumerData
   */
  assignments: Relationship;
}

/**
 * Check if a given object implements the ConsumerData interface.
 */
export function instanceOfConsumerData(value: object): value is ConsumerData {
  if (!("kind" in value) || value["kind"] === undefined) return false;
  if (!("metadata" in value) || value["metadata"] === undefined) return false;
  if (!("cluster_id" in value) || value["cluster_id"] === undefined) return false;
  if (!("consumer_group_id" in value) || value["consumer_group_id"] === undefined) return false;
  if (!("consumer_id" in value) || value["consumer_id"] === undefined) return false;
  if (!("client_id" in value) || value["client_id"] === undefined) return false;
  if (!("assignments" in value) || value["assignments"] === undefined) return false;
  return true;
}

export function ConsumerDataFromJSON(json: any): ConsumerData {
  return ConsumerDataFromJSONTyped(json, false);
}

export function ConsumerDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConsumerData {
  if (json == null) {
    return json;
  }
  return {
    kind: json["kind"],
    metadata: ResourceMetadataFromJSON(json["metadata"]),
    cluster_id: json["cluster_id"],
    consumer_group_id: json["consumer_group_id"],
    consumer_id: json["consumer_id"],
    instance_id: json["instance_id"] == null ? undefined : json["instance_id"],
    client_id: json["client_id"],
    assignments: RelationshipFromJSON(json["assignments"]),
  };
}

export function ConsumerDataToJSON(json: any): ConsumerData {
  return ConsumerDataToJSONTyped(json, false);
}

export function ConsumerDataToJSONTyped(
  value?: ConsumerData | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    kind: value["kind"],
    metadata: ResourceMetadataToJSON(value["metadata"]),
    cluster_id: value["cluster_id"],
    consumer_group_id: value["consumer_group_id"],
    consumer_id: value["consumer_id"],
    instance_id: value["instance_id"],
    client_id: value["client_id"],
    assignments: RelationshipToJSON(value["assignments"]),
  };
}

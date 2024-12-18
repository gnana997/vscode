/* tslint:disable */
/* eslint-disable */
/**
 * Confluent Schema Registry APIs
 * REST API for the Schema Registry
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { Rule } from "./Rule";
import { RuleFromJSON, RuleFromJSONTyped, RuleToJSON, RuleToJSONTyped } from "./Rule";

/**
 * Schema rule set
 * @export
 * @interface RuleSet
 */
export interface RuleSet {
  /**
   *
   * @type {Array<Rule>}
   * @memberof RuleSet
   */
  migrationRules?: Array<Rule>;
  /**
   *
   * @type {Array<Rule>}
   * @memberof RuleSet
   */
  domainRules?: Array<Rule>;
}

/**
 * Check if a given object implements the RuleSet interface.
 */
export function instanceOfRuleSet(value: object): value is RuleSet {
  return true;
}

export function RuleSetFromJSON(json: any): RuleSet {
  return RuleSetFromJSONTyped(json, false);
}

export function RuleSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuleSet {
  if (json == null) {
    return json;
  }
  return {
    migrationRules:
      json["migrationRules"] == null
        ? undefined
        : (json["migrationRules"] as Array<any>).map(RuleFromJSON),
    domainRules:
      json["domainRules"] == null
        ? undefined
        : (json["domainRules"] as Array<any>).map(RuleFromJSON),
  };
}

export function RuleSetToJSON(json: any): RuleSet {
  return RuleSetToJSONTyped(json, false);
}

export function RuleSetToJSONTyped(
  value?: RuleSet | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    migrationRules:
      value["migrationRules"] == null
        ? undefined
        : (value["migrationRules"] as Array<any>).map(RuleToJSON),
    domainRules:
      value["domainRules"] == null
        ? undefined
        : (value["domainRules"] as Array<any>).map(RuleToJSON),
  };
}

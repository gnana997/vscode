/* tslint:disable */
/* eslint-disable */
/**
 * Confluent ide-sidecar API
 * API for the Confluent ide-sidecar, part of Confluent for VS Code
 *
 * The version of the OpenAPI document: 0.167.0
 * Contact: vscode@confluent.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as runtime from "../runtime";
import type { HealthResponse } from "../models/index";
import { HealthResponseFromJSON, HealthResponseToJSON } from "../models/index";

/**
 *
 */
export class MicroProfileHealthApi extends runtime.BaseAPI {
  /**
   * Check the liveness of the application
   * The Liveness check of this application
   */
  async microprofileHealthLivenessRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<HealthResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/gateway/v1/health/live`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => HealthResponseFromJSON(jsonValue));
  }

  /**
   * Check the liveness of the application
   * The Liveness check of this application
   */
  async microprofileHealthLiveness(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<HealthResponse> {
    const response = await this.microprofileHealthLivenessRaw(initOverrides);
    return await response.value();
  }

  /**
   * Check the readiness of the application
   * The Readiness check of this application
   */
  async microprofileHealthReadinessRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<HealthResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/gateway/v1/health/ready`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => HealthResponseFromJSON(jsonValue));
  }

  /**
   * Check the readiness of the application
   * The Readiness check of this application
   */
  async microprofileHealthReadiness(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<HealthResponse> {
    const response = await this.microprofileHealthReadinessRaw(initOverrides);
    return await response.value();
  }

  /**
   * Check the health of the application
   * An aggregated view of the Liveness, Readiness and Startup of this application
   */
  async microprofileHealthRootRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<HealthResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/gateway/v1/health`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => HealthResponseFromJSON(jsonValue));
  }

  /**
   * Check the health of the application
   * An aggregated view of the Liveness, Readiness and Startup of this application
   */
  async microprofileHealthRoot(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<HealthResponse> {
    const response = await this.microprofileHealthRootRaw(initOverrides);
    return await response.value();
  }

  /**
   * Check the startup of the application
   * The Startup check of this application
   */
  async microprofileHealthStartupRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<HealthResponse>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/gateway/v1/health/started`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => HealthResponseFromJSON(jsonValue));
  }

  /**
   * Check the startup of the application
   * The Startup check of this application
   */
  async microprofileHealthStartup(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<HealthResponse> {
    const response = await this.microprofileHealthStartupRaw(initOverrides);
    return await response.value();
  }
}

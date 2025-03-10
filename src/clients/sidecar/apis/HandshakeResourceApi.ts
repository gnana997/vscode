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

import * as runtime from "../runtime";
import type { SidecarAccessToken } from "../models/index";
import { SidecarAccessTokenFromJSON, SidecarAccessTokenToJSON } from "../models/index";

/**
 *
 */
export class HandshakeResourceApi extends runtime.BaseAPI {
  /**
   */
  async gatewayV1HandshakeGetRaw(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<SidecarAccessToken>> {
    const queryParameters: any = {};

    const headerParameters: runtime.HTTPHeaders = {};

    const response = await this.request(
      {
        path: `/gateway/v1/handshake`,
        method: "GET",
        headers: headerParameters,
        query: queryParameters,
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) =>
      SidecarAccessTokenFromJSON(jsonValue),
    );
  }

  /**
   */
  async gatewayV1HandshakeGet(
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<SidecarAccessToken> {
    const response = await this.gatewayV1HandshakeGetRaw(initOverrides);
    return await response.value();
  }
}

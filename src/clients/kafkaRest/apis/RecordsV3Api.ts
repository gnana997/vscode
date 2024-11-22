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

import * as runtime from "../runtime";
import type { ProduceRequest, ProduceResponse } from "../models/index";
import {
  ProduceRequestFromJSON,
  ProduceRequestToJSON,
  ProduceResponseFromJSON,
  ProduceResponseToJSON,
} from "../models/index";

export interface ProduceRecordRequest {
  cluster_id: string;
  topic_name: string;
  dry_run?: boolean;
  ProduceRequest?: ProduceRequest;
}

/**
 *
 */
export class RecordsV3Api extends runtime.BaseAPI {
  /**
   * [![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)  Produce records to the given topic, returning delivery reports for each record produced. This API can be used in streaming mode by setting \"Transfer-Encoding: chunked\" header. For as long as the connection is kept open, the server will keep accepting records. Records are streamed to and from the server as Concatenated JSON. For each record sent to the server, the server will asynchronously send back a delivery report, in the same order, each with its own error_code. An error_code of 200 indicates success. The HTTP status code will be HTTP 200 OK as long as the connection is successfully established. To identify records that have encountered an error, check the error_code of each delivery report.  Note that the cluster_id is validated only when running in Confluent Cloud.  This API currently does not support Schema Registry integration. Sending schemas is not supported. Only BINARY, JSON, and STRING formats are supported.
   * Produce Records
   */
  async produceRecordRaw(
    requestParameters: ProduceRecordRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<ProduceResponse>> {
    if (requestParameters["cluster_id"] == null) {
      throw new runtime.RequiredError(
        "cluster_id",
        'Required parameter "cluster_id" was null or undefined when calling produceRecord().',
      );
    }

    if (requestParameters["topic_name"] == null) {
      throw new runtime.RequiredError(
        "topic_name",
        'Required parameter "topic_name" was null or undefined when calling produceRecord().',
      );
    }

    const queryParameters: any = {};

    if (requestParameters["dry_run"] != null) {
      queryParameters["dry_run"] = requestParameters["dry_run"];
    }

    const headerParameters: runtime.HTTPHeaders = {};

    headerParameters["Content-Type"] = "application/json";

    if (this.configuration && this.configuration.accessToken) {
      // oauth required
      headerParameters["Authorization"] = await this.configuration.accessToken(
        "external-access-token",
        [],
      );
    }

    if (
      this.configuration &&
      (this.configuration.username !== undefined || this.configuration.password !== undefined)
    ) {
      headerParameters["Authorization"] =
        "Basic " + btoa(this.configuration.username + ":" + this.configuration.password);
    }
    const response = await this.request(
      {
        path: `/kafka/v3/clusters/{cluster_id}/topics/{topic_name}/records`
          .replace(`{${"cluster_id"}}`, encodeURIComponent(String(requestParameters["cluster_id"])))
          .replace(
            `{${"topic_name"}}`,
            encodeURIComponent(String(requestParameters["topic_name"])),
          ),
        method: "POST",
        headers: headerParameters,
        query: queryParameters,
        body: ProduceRequestToJSON(requestParameters["ProduceRequest"]),
      },
      initOverrides,
    );

    return new runtime.JSONApiResponse(response, (jsonValue) => ProduceResponseFromJSON(jsonValue));
  }

  /**
   * [![Generally Available](https://img.shields.io/badge/Lifecycle%20Stage-Generally%20Available-%2345c6e8)](#section/Versioning/API-Lifecycle-Policy)  Produce records to the given topic, returning delivery reports for each record produced. This API can be used in streaming mode by setting \"Transfer-Encoding: chunked\" header. For as long as the connection is kept open, the server will keep accepting records. Records are streamed to and from the server as Concatenated JSON. For each record sent to the server, the server will asynchronously send back a delivery report, in the same order, each with its own error_code. An error_code of 200 indicates success. The HTTP status code will be HTTP 200 OK as long as the connection is successfully established. To identify records that have encountered an error, check the error_code of each delivery report.  Note that the cluster_id is validated only when running in Confluent Cloud.  This API currently does not support Schema Registry integration. Sending schemas is not supported. Only BINARY, JSON, and STRING formats are supported.
   * Produce Records
   */
  async produceRecord(
    requestParameters: ProduceRecordRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<ProduceResponse> {
    const response = await this.produceRecordRaw(requestParameters, initOverrides);
    return await response.value();
  }
}

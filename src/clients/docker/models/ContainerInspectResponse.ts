/* tslint:disable */
/* eslint-disable */
/**
 * Docker Engine API
 * The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.  Most of the client\'s commands map directly to API endpoints (e.g. `docker ps` is `GET /containers/json`). The notable exception is running containers, which consists of several API calls.  # Errors  The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:  ``` {   \"message\": \"page not found\" } ```  # Versioning  The API is usually changed in each release, so API calls are versioned to ensure that clients don\'t break. To lock to a specific version of the API, you prefix the URL with its version, for example, call `/v1.30/info` to use the v1.30 version of the `/info` endpoint. If the API version specified in the URL is not supported by the daemon, a HTTP `400 Bad Request` error message is returned.  If you omit the version-prefix, the current version of the API (v1.43) is used. For example, calling `/info` is the same as calling `/v1.43/info`. Using the API without a version-prefix is deprecated and will be removed in a future release.  Engine releases in the near future should support this version of the API, so your client will continue to work even if it is talking to a newer Engine.  The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break when talking to newer daemons.   # Authentication  Authentication for registries is handled client side. The client has to send authentication details to various endpoints that need to communicate with registries, such as `POST /images/(name)/push`. These are sent as `X-Registry-Auth` header as a [base64url encoded](https://tools.ietf.org/html/rfc4648#section-5) (JSON) string with the following structure:  ``` {   \"username\": \"string\",   \"password\": \"string\",   \"email\": \"string\",   \"serveraddress\": \"string\" } ```  The `serveraddress` is a domain/IP without a protocol. Throughout this structure, double quotes are required.  If you have already got an identity token from the [`/auth` endpoint](#operation/SystemAuth), you can just pass this instead of credentials:  ``` {   \"identitytoken\": \"9cbaf023786cd7...\" } ```
 *
 * The version of the OpenAPI document: 1.43
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from "../runtime";
import type { ContainerConfig } from "./ContainerConfig";
import {
  ContainerConfigFromJSON,
  ContainerConfigFromJSONTyped,
  ContainerConfigToJSON,
  ContainerConfigToJSONTyped,
} from "./ContainerConfig";
import type { MountPoint } from "./MountPoint";
import {
  MountPointFromJSON,
  MountPointFromJSONTyped,
  MountPointToJSON,
  MountPointToJSONTyped,
} from "./MountPoint";
import type { NetworkSettings } from "./NetworkSettings";
import {
  NetworkSettingsFromJSON,
  NetworkSettingsFromJSONTyped,
  NetworkSettingsToJSON,
  NetworkSettingsToJSONTyped,
} from "./NetworkSettings";
import type { HostConfig } from "./HostConfig";
import {
  HostConfigFromJSON,
  HostConfigFromJSONTyped,
  HostConfigToJSON,
  HostConfigToJSONTyped,
} from "./HostConfig";
import type { GraphDriverData } from "./GraphDriverData";
import {
  GraphDriverDataFromJSON,
  GraphDriverDataFromJSONTyped,
  GraphDriverDataToJSON,
  GraphDriverDataToJSONTyped,
} from "./GraphDriverData";
import type { ContainerState } from "./ContainerState";
import {
  ContainerStateFromJSON,
  ContainerStateFromJSONTyped,
  ContainerStateToJSON,
  ContainerStateToJSONTyped,
} from "./ContainerState";

/**
 *
 * @export
 * @interface ContainerInspectResponse
 */
export interface ContainerInspectResponse {
  /**
   * The ID of the container
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  Id?: string;
  /**
   * The time the container was created
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  Created?: string;
  /**
   * The path to the command being run
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  Path?: string;
  /**
   * The arguments to the command being run
   * @type {Array<string>}
   * @memberof ContainerInspectResponse
   */
  Args?: Array<string>;
  /**
   *
   * @type {ContainerState}
   * @memberof ContainerInspectResponse
   */
  State?: ContainerState | null;
  /**
   * The container's image ID
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  Image?: string;
  /**
   *
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  ResolvConfPath?: string;
  /**
   *
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  HostnamePath?: string;
  /**
   *
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  HostsPath?: string;
  /**
   *
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  LogPath?: string;
  /**
   *
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  Name?: string;
  /**
   *
   * @type {number}
   * @memberof ContainerInspectResponse
   */
  RestartCount?: number;
  /**
   *
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  Driver?: string;
  /**
   *
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  Platform?: string;
  /**
   *
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  MountLabel?: string;
  /**
   *
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  ProcessLabel?: string;
  /**
   *
   * @type {string}
   * @memberof ContainerInspectResponse
   */
  AppArmorProfile?: string;
  /**
   * IDs of exec instances that are running in the container.
   * @type {Array<string>}
   * @memberof ContainerInspectResponse
   */
  ExecIDs?: Array<string> | null;
  /**
   *
   * @type {HostConfig}
   * @memberof ContainerInspectResponse
   */
  HostConfig?: HostConfig;
  /**
   *
   * @type {GraphDriverData}
   * @memberof ContainerInspectResponse
   */
  GraphDriver?: GraphDriverData;
  /**
   * The size of files that have been created or changed by this
   * container.
   *
   * @type {number}
   * @memberof ContainerInspectResponse
   */
  SizeRw?: number;
  /**
   * The total size of all the files in this container.
   * @type {number}
   * @memberof ContainerInspectResponse
   */
  SizeRootFs?: number;
  /**
   *
   * @type {Array<MountPoint>}
   * @memberof ContainerInspectResponse
   */
  Mounts?: Array<MountPoint>;
  /**
   *
   * @type {ContainerConfig}
   * @memberof ContainerInspectResponse
   */
  Config?: ContainerConfig;
  /**
   *
   * @type {NetworkSettings}
   * @memberof ContainerInspectResponse
   */
  NetworkSettings?: NetworkSettings;
}

/**
 * Check if a given object implements the ContainerInspectResponse interface.
 */
export function instanceOfContainerInspectResponse(
  value: object,
): value is ContainerInspectResponse {
  return true;
}

export function ContainerInspectResponseFromJSON(json: any): ContainerInspectResponse {
  return ContainerInspectResponseFromJSONTyped(json, false);
}

export function ContainerInspectResponseFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean,
): ContainerInspectResponse {
  if (json == null) {
    return json;
  }
  return {
    Id: json["Id"] == null ? undefined : json["Id"],
    Created: json["Created"] == null ? undefined : json["Created"],
    Path: json["Path"] == null ? undefined : json["Path"],
    Args: json["Args"] == null ? undefined : json["Args"],
    State: json["State"] == null ? undefined : ContainerStateFromJSON(json["State"]),
    Image: json["Image"] == null ? undefined : json["Image"],
    ResolvConfPath: json["ResolvConfPath"] == null ? undefined : json["ResolvConfPath"],
    HostnamePath: json["HostnamePath"] == null ? undefined : json["HostnamePath"],
    HostsPath: json["HostsPath"] == null ? undefined : json["HostsPath"],
    LogPath: json["LogPath"] == null ? undefined : json["LogPath"],
    Name: json["Name"] == null ? undefined : json["Name"],
    RestartCount: json["RestartCount"] == null ? undefined : json["RestartCount"],
    Driver: json["Driver"] == null ? undefined : json["Driver"],
    Platform: json["Platform"] == null ? undefined : json["Platform"],
    MountLabel: json["MountLabel"] == null ? undefined : json["MountLabel"],
    ProcessLabel: json["ProcessLabel"] == null ? undefined : json["ProcessLabel"],
    AppArmorProfile: json["AppArmorProfile"] == null ? undefined : json["AppArmorProfile"],
    ExecIDs: json["ExecIDs"] == null ? undefined : json["ExecIDs"],
    HostConfig: json["HostConfig"] == null ? undefined : HostConfigFromJSON(json["HostConfig"]),
    GraphDriver:
      json["GraphDriver"] == null ? undefined : GraphDriverDataFromJSON(json["GraphDriver"]),
    SizeRw: json["SizeRw"] == null ? undefined : json["SizeRw"],
    SizeRootFs: json["SizeRootFs"] == null ? undefined : json["SizeRootFs"],
    Mounts:
      json["Mounts"] == null ? undefined : (json["Mounts"] as Array<any>).map(MountPointFromJSON),
    Config: json["Config"] == null ? undefined : ContainerConfigFromJSON(json["Config"]),
    NetworkSettings:
      json["NetworkSettings"] == null
        ? undefined
        : NetworkSettingsFromJSON(json["NetworkSettings"]),
  };
}

export function ContainerInspectResponseToJSON(json: any): ContainerInspectResponse {
  return ContainerInspectResponseToJSONTyped(json, false);
}

export function ContainerInspectResponseToJSONTyped(
  value?: ContainerInspectResponse | null,
  ignoreDiscriminator: boolean = false,
): any {
  if (value == null) {
    return value;
  }

  return {
    Id: value["Id"],
    Created: value["Created"],
    Path: value["Path"],
    Args: value["Args"],
    State: ContainerStateToJSON(value["State"]),
    Image: value["Image"],
    ResolvConfPath: value["ResolvConfPath"],
    HostnamePath: value["HostnamePath"],
    HostsPath: value["HostsPath"],
    LogPath: value["LogPath"],
    Name: value["Name"],
    RestartCount: value["RestartCount"],
    Driver: value["Driver"],
    Platform: value["Platform"],
    MountLabel: value["MountLabel"],
    ProcessLabel: value["ProcessLabel"],
    AppArmorProfile: value["AppArmorProfile"],
    ExecIDs: value["ExecIDs"],
    HostConfig: HostConfigToJSON(value["HostConfig"]),
    GraphDriver: GraphDriverDataToJSON(value["GraphDriver"]),
    SizeRw: value["SizeRw"],
    SizeRootFs: value["SizeRootFs"],
    Mounts:
      value["Mounts"] == null ? undefined : (value["Mounts"] as Array<any>).map(MountPointToJSON),
    Config: ContainerConfigToJSON(value["Config"]),
    NetworkSettings: NetworkSettingsToJSON(value["NetworkSettings"]),
  };
}

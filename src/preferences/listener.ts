import { ConfigurationChangeEvent, Disposable, workspace, WorkspaceConfiguration } from "vscode";
import { Logger } from "../logging";
import {
  LOCAL_DOCKER_SOCKET_PATH,
  SSL_PEM_PATHS,
  SSL_VERIFY_SERVER_CERT_DISABLED,
} from "./constants";
import { updatePreferences } from "./updates";

const logger = new Logger("preferences.listener");

/** Main listener for any changes to {@link WorkspaceConfiguration} that affect this extension. */
export function createConfigChangeListener(): Disposable {
  // NOTE: this fires from any VS Code configuration, not just configs from our extension
  const disposable: Disposable = workspace.onDidChangeConfiguration(
    async (event: ConfigurationChangeEvent) => {
      // get the latest workspace configs after the event fired
      const configs: WorkspaceConfiguration = workspace.getConfiguration();

      if (event.affectsConfiguration(SSL_PEM_PATHS)) {
        // inform the sidecar that the SSL/TLS .pem paths have changed
        logger.debug(`"${SSL_PEM_PATHS}" config changed`);
        await updatePreferences();
        return;
      }

      if (event.affectsConfiguration(SSL_VERIFY_SERVER_CERT_DISABLED)) {
        // inform the sidecar that the server cert verification has changed
        logger.debug(`"${SSL_VERIFY_SERVER_CERT_DISABLED}" config changed`);
        await updatePreferences();
        return;
      }

      if (event.affectsConfiguration(LOCAL_DOCKER_SOCKET_PATH)) {
        // just log it so we don't have to log every time we use it
        logger.debug(
          `"${LOCAL_DOCKER_SOCKET_PATH}" changed:`,
          configs.get(LOCAL_DOCKER_SOCKET_PATH),
        );
        return;
      }

      // --- PREVIEW SETTINGS --
      // Remove the sections below once the behavior is enabled by default and a setting is no
      // longer needed to opt-in to the feature.
    },
  );

  return disposable;
}

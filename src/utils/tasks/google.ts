import * as clasprcJson from "@utils/tasks/clasprc_json";
import * as googleapis from "googleapis";

export const client = () => {
  try {
    const json = clasprcJson.read();

    const oauth2Client = new googleapis.google.auth.OAuth2(
      json.oauth2ClientSettings.clientId,
      json.oauth2ClientSettings.clientSecret,
      json.oauth2ClientSettings.redirectUri,
    );

    oauth2Client.setCredentials(json.token);
    return oauth2Client;
  } catch (error) {
    throw new Error(error);
  }
};

export const drive = (oauth2Client: googleapis.Common.OAuth2Client) =>
  googleapis.google.drive({
    version: "v3",
    auth: oauth2Client,
  });

export const script = (oauth2Client: googleapis.Common.OAuth2Client) =>
  googleapis.google.script({
    version: "v1",
    auth: oauth2Client,
  });

export const docs = (oauth2Client: googleapis.Common.OAuth2Client) =>
  googleapis.google.docs({
    version: "v1",
    auth: oauth2Client,
  });

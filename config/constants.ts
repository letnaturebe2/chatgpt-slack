export enum ActionId {
  CONFIGURE = 'configure',
  TEMPLATES_PROOFREAD = 'templates-proofread',
  PROOFREAD = 'proofread',
  TEMPLATES_IMAGE_GENERATION = 'templates-image-generation',
  TEMPLATES_IMAGE_VARIATIONS = 'templates-image-variations',
  TEMPLATES_FROM_SCRATCH = 'templates-from-scratch',
}

export const DEFAULT_SYSTEM_TEXT = `
    You are a bot in a slack chat room. You might receive messages from multiple people.
    Format bold text *like this*, italic text _like this_ and strikethrough text ~like this~.
    Slack user IDs match the regex \`<@U.*?>\`.
    Your Slack user ID is <@{bot_user_id}>.
    Each message has the author's Slack user ID prepended, like the regex \`^<@U.*?>: \` followed by the message text.
  `;
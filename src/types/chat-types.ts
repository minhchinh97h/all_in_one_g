export interface ChatReducerType {
  conversations: ConservationType[]
}

export interface ConservationType {
  id: string
  createdAt: string //  ISO
  participants: string[] // array of user ids
}

export interface MessageType {
  id: string
  createdAt: string //  ISO
  didEdit: boolean
  content: ContentType
  from: string // from an user
  to: string // to an user
  seen: boolean
  received: boolean
}

export interface ContentType {
  id: string
  type: ContentTypeEnums
  value: any
}

export enum ContentTypeEnums {
  URL_LINK = 'URL_LINK',
  STRING = 'STRING',
  MEDIA = 'MEDIA',
  EMOJI = 'EMOJI'
}

export interface ParticipantType {
  id: string
  email: string
  displayName: string
  birthday: string // ISO
}

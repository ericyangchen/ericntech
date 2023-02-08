export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      post: {
        Row: {
          commentCount: number
          date: string
          description: string
          id: number
          isFeatured: boolean
          likeCount: number
          thumbnail: string
          title: string
          url: string
          viewCount: number
        }
        Insert: {
          commentCount?: number
          date: string
          description: string
          id?: number
          isFeatured?: boolean
          likeCount?: number
          thumbnail: string
          title: string
          url?: string
          viewCount?: number
        }
        Update: {
          commentCount?: number
          date?: string
          description?: string
          id?: number
          isFeatured?: boolean
          likeCount?: number
          thumbnail?: string
          title?: string
          url?: string
          viewCount?: number
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

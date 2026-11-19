export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          avatar_url: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string | null;
          avatar_url?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      billing_customers: {
        Row: {
          user_id: string;
          provider: string;
          provider_customer_id: string;
          created_at: string;
        };
        Insert: {
          user_id: string;
          provider?: string;
          provider_customer_id: string;
          created_at?: string;
        };
        Update: {
          user_id?: string;
          provider?: string;
          provider_customer_id?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      billing_subscriptions: {
        Row: {
          user_id: string;
          provider: string;
          provider_subscription_id: string;
          status: Database["public"]["Enums"]["billing_subscription_status"];
          current_period_end: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          user_id: string;
          provider?: string;
          provider_subscription_id: string;
          status: Database["public"]["Enums"]["billing_subscription_status"];
          current_period_end?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          user_id?: string;
          provider?: string;
          provider_subscription_id?: string;
          created_at?: string;
          status?: Database["public"]["Enums"]["billing_subscription_status"];
          current_period_end?: string | null;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: { [_ in never]: never };
    Functions: { [_ in never]: never };
    Enums: {
      billing_subscription_status: "trialing" | "active" | "past_due" | "canceled" | "incomplete";
    };
    CompositeTypes: { [_ in never]: never };
  };
}

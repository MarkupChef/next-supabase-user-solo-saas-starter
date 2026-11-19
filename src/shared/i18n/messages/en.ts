const en = {
  metadata: {
    title: "Next.js Supabase SaaS Starter",
    description: "A solo-user SaaS starter built with Next.js and Supabase.",
  },
  common: {
    brand: "Project starter",
    language: "Language",
    english: "English",
    ukrainian: "Ukrainian",
  },
  siteHeader: {
    pricing: "Pricing",
    plan: "Plan",
    signIn: "Sign in",
  },
  siteFooter: {
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    contact: "Contact",
    email: "youemail@example.com",
  },
  userMenu: {
    profile: "Profile",
    billing: "Billing",
    settings: "Settings",
    signOut: "Sign out",
  },
  errors: {
    genericTitle: "Something went wrong",
    retry: "Try again",
    notFoundTitle: "Page not found",
    notFoundDescription: "The page you are looking for does not exist.",
    goHome: "Go home",
  },
  home: {
    nav: {
      signIn: "Sign in",
      createAccount: "Create account",
    },
    badge: "Next.js 16 + Supabase",
    title: "SaaS starter for solo projects",
    hero: {
      description: "A foundation for building your SaaS with Next.js and Supabase.",
    },
    description:
      "This starter gives a solo-user MVP the baseline web-app pieces: auth, protected routes, account controls, settings, validation, database boundaries, and extension points for future product flows.",
    mainFeature: {
      title: "Main feature",
    },
    about: {
      badge: "About starter",
      title: "A practical project starter for solo-user MVP web apps.",
    },
    howItWorks: {
      title: "How it works",
      description:
        "Configure the environment, connect Supabase, and start replacing placeholders with your product logic.",
      steps: {
        publicEnv: {
          title: "Set public app variables",
          description:
            "Add the public variables that point the app at your Supabase project and local or deployed URL.",
        },
        serverEnv: {
          title: "Enable account deletion",
          description:
            "Set the optional server-only key to enable account deletion.",
        },
        supabase: {
          title: "Apply the Supabase baseline",
          description:
            "Run the baseline migration so profiles, billing placeholders, triggers, and user-scoped RLS policies exist before real product data is added.",
        },
      },
    },
    footer: "Built as a solo-user project starter.",
    checklist: {
      title: "Scaffold checklist",
      description:
        "Core app capabilities ready for your product-specific slices.",
      items: {
        registration: "Email/password registration",
        signIn: "Email/password sign in and sign out",
        google: "Google OAuth sign in",
        passwordRecovery: "Forgot and reset password flows",
        passwordChange: "Password change for email accounts",
        accountDeletion: "Account deletion",
        protectedShell: "Protected application layout",
        profile: "Profile and account details",
        theme: "Light, dark, and system theme",
        language: "English and Ukrainian language switching",
        supabase: "Supabase Auth, Postgres, and user-scoped RLS",
        forms: "Zod and React Hook Form validation",
        i18n: "Localized routing and messages with next-intl",
        extensions: "Placeholder billing and plan pages",
      },
    },
    pages: {
      title: "Starter pages",
      items: {
        home: {
          title: "Home",
          description: "Overview of the starter and how to get it running.",
        },
        pricing: {
          title: "Pricing",
          description: "Compare example subscription plans and prices.",
        },
        privacy: {
          title: "Privacy Policy",
          description: "Privacy policy template for your app.",
        },
        terms: {
          title: "Terms of Service",
          description: "Terms of service template for your app.",
        },
        signIn: {
          title: "Sign In",
          description: "Sign in with your email and password or with Google.",
        },
        signUp: {
          title: "Sign Up",
          description: "Create an account with your email and password.",
        },
        forgotPassword: {
          title: "Forgot Password",
          description: "Request a password reset link by email.",
        },
        resetPassword: {
          title: "Reset Password",
          description: "Set a new password using the reset link from your email.",
        },
        profile: {
          title: "Profile",
          description: "View account details, change your password, or delete your account.",
        },
        settings: {
          title: "Settings",
          description: "Choose the interface theme and language.",
        },
        plan: {
          title: "Plan",
          description: "Compare example subscription plans from your account.",
        },
        billing: {
          title: "Billing",
          description: "Placeholder for payment details and invoices.",
        },
      },
    },
    stack: {
      title: "Stack",
      description:
        "The starter uses a modern typed Next.js stack with local UI primitives and test coverage.",
      items: {
        next: {
          title: "Next.js 16 App Router",
          description: "File-system routing, server components, route handlers, and proxy support.",
        },
        react: {
          title: "React 19",
          description: "Current React runtime for server and client components.",
        },
        typescript: {
          title: "TypeScript strict mode",
          description: "Typed application code, schemas, and Supabase database shapes.",
        },
        tailwind: {
          title: "TailwindCSS 4",
          description: "Token-based styling through the app stylesheet.",
        },
        ui: {
          title: "Local shadcn-style UI",
          description: "Reusable components stored in src/shared/ui.",
        },
        supabase: {
          title: "Supabase SSR/Auth/Postgres",
          description: "Browser, server, proxy, and admin helpers around Supabase.",
        },
        zod: {
          title: "Zod",
          description: "Runtime schemas with inferred TypeScript types.",
        },
        forms: {
          title: "React Hook Form",
          description: "Validated forms with @hookform/resolvers/zod.",
        },
        query: {
          title: "TanStack Query",
          description: "Client-side async state when product features need it.",
        },
        theme: {
          title: "next-themes",
          description: "Theme switching with persisted light, dark, and system modes.",
        },
        i18n: {
          title: "next-intl",
          description: "Localized routes, navigation helpers, and message dictionaries.",
        },
        testing: {
          title: "Vitest and Playwright",
          description: "Unit, component, and browser smoke test tooling.",
        },
      },
    },
  },
  pricing: {
    publicTitle: "Pricing",
    accountTitle: "Plan",
    description: "Example plans with sample features and pricing.",
    period: "per month",
    stripePlaceholder: "Stripe checkout will be connected later.",
    plans: {
      free: {
        name: "Free",
        price: "$0",
        action: "Continue",
        features: {
          core: "Core app features",
          communitySupport: "Community support",
        },
      },
      pro: {
        name: "Pro",
        price: "$10",
        action: "Upgrade",
        features: {
          core: "Everything in Free",
          advanced: "Advanced app features",
          prioritySupport: "Priority support",
        },
      },
    },
  },
  privacy: {
    title: "Privacy Policy",
    body: "your Privacy Policy text here",
  },
  terms: {
    title: "Terms of Service",
    body: "your Terms of Service text here",
  },
  settings: {
    title: "Settings",
    description: "Personalize how the app looks and behaves for your account.",
    appearance: {
      title: "Appearance",
      description: "Choose the visual mode used across the app.",
      themeLabel: "Theme",
      themeDescription: "Use light, dark, or your system preference.",
    },
    language: {
      title: "Language",
      description: "Choose the interface language for this browser.",
      languageLabel: "Display language",
      languageDescription: "Switch between supported app languages.",
    },
  },
  billing: {
    title: "Billing",
    description:
      "Manage payment details and invoices after billing is connected.",
    empty: {
      title: "Billing placeholder",
      description: "Stripe is not integrated yet.",
      action: "View plan",
    },
  },
  profile: {
    title: "Profile",
    description: "Manage your account details and deletion controls.",
    account: {
      title: "Account details",
      description: "Basic details from your signed-in account.",
      email: "Email",
      fullName: "Full name",
      emptyFullName: "Not set",
    },
    security: {
      title: "Password",
      description: "Change the password used to sign in with email.",
      passwordUnavailable:
        "Password changes are available only for accounts created with email and password.",
    },
    danger: {
      title: "Delete account",
      description:
        "Permanently delete your account and personal profile data.",
    },
  },
  deleteAccount: {
    trigger: "Delete account",
    dialog: {
      title: "Delete account",
      description:
        "This action cannot be undone. Type your account email to confirm deletion.",
      emailLabel: "Account email",
      confirm: "Delete account",
    },
    validation: {
      emailRequired: "Enter your current email to confirm account deletion.",
      emailMismatch: "The email does not match the signed-in account.",
    },
    messages: {
      deleted: "Your account has been deleted.",
      unableDelete: "Unable to delete account.",
    },
  },
  auth: {
    card: {
      signIn: {
        title: "Welcome back",
        description: "Sign in to continue to your workspace.",
        footerText: "No account?",
        footerLabel: "Create one",
      },
      signUp: {
        title: "Create your account",
        description:
          "Start with a personal profile. Product-specific features can be added after setup.",
        footerText: "Already have an account?",
        footerLabel: "Sign in",
      },
      forgotPassword: {
        title: "Reset password",
        description: "Enter your email and we will send reset instructions.",
        footerText: "Remembered it?",
        footerLabel: "Sign in",
      },
      resetPassword: {
        title: "Choose a new password",
        description: "Use at least 8 characters.",
        footerText: "Back to",
        footerLabel: "sign in",
      },
    },
    fields: {
      fullName: "Full name",
      email: "Email",
      password: "Password",
      currentPassword: "Current password",
      confirmPassword: "Confirm password",
      newPassword: "New password",
      confirmNewPassword: "Confirm new password",
    },
    actions: {
      signIn: "Sign in",
      createAccount: "Create account",
      forgotPassword: "Forgot password?",
      continueWithGoogle: "Continue with Google",
      sendResetLink: "Send reset link",
      changePassword: "Change password",
      updatePassword: "Update password",
      close: "Close",
      togglePasswordVisibility: "Show or hide password",
    },
    validation: {
      emailRequired: "Email is required.",
      emailInvalid: "Enter a valid email address.",
      passwordRequired: "Password is required.",
      passwordMin: "Password must be at least 8 characters.",
      fullNameRequired: "Full name is required.",
      fullNameMin: "Full name must be at least 2 characters.",
      fullNameMax: "Full name must be 120 characters or fewer.",
      confirmPasswordRequired: "Confirm your password.",
      passwordsMismatch: "Passwords do not match.",
    },
    messages: {
      unableSignIn: "Unable to sign in.",
      unableCreateAccount: "Unable to create account. Try again later.",
      unableSendResetEmail: "Unable to send reset email.",
      unableUpdatePassword: "Unable to update password.",
      checkEmailPassword: "Check your email and password.",
      authNotConfigured: "Authentication is not configured.",
      checkAccountDetails: "Check the submitted account details.",
      confirmAccount:
        "Check your inbox. If an account can be created, we sent an email to continue.",
      googleNotConfigured: "Google sign in is not configured.",
      unableGoogle: "Unable to start Google sign in.",
      validEmail: "Enter a valid email address.",
      resetInstructions: "Password reset instructions were sent.",
      checkNewPassword: "Check the new password.",
      signInRequired: "Sign in again to change your password.",
      passwordUnavailable:
        "Password changes are available only for accounts created with email and password.",
      passwordUpdated: "Password updated.",
      currentPasswordInvalid: "Current password is invalid.",
    },
    passwordDialog: {
      title: "Change password",
      description: "Enter your current password and choose a new one.",
      successTitle: "Password updated",
      successDescription:
        "Your password has been changed. Use the new password the next time you sign in.",
    },
  },
} as const;

export default en;

type WidenMessages<T> = T extends string
  ? string
  : { readonly [Key in keyof T]: WidenMessages<T[Key]> };

export type Messages = WidenMessages<typeof en>;

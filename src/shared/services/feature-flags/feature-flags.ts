import type { FeatureFlagPayload } from "@/services/feature-flags/providers/IFeatureFlagsProvider"

export enum FeatureFlag {
	WEBTOOLS = "webtools",
	WORKTREES = "worktree-exp",
	// Feature flag for showing the new onboarding flow or old welcome view.
	ONBOARDING_MODELS = "onboarding_models",
	// Feature flag for remote banner service
	REMOTE_BANNERS = "remote-banners",
	// Feature flag for sourcing Cline models from OpenRouter's public models endpoint
	CLINE_MODELS_OPENROUTER_SOURCE = "cline-models-openrouter-source",
}

export const FeatureFlagDefaultValue: Partial<Record<FeatureFlag, FeatureFlagPayload>> = {
	[FeatureFlag.WEBTOOLS]: false,
	[FeatureFlag.WORKTREES]: false,
	[FeatureFlag.ONBOARDING_MODELS]: process.env.E2E_TEST === "true" ? { models: {} } : undefined,
	[FeatureFlag.REMOTE_BANNERS]: process.env.E2E_TEST === "true" || process.env.IS_DEV === "true",
	[FeatureFlag.CLINE_MODELS_OPENROUTER_SOURCE]: false,
}

export const FEATURE_FLAGS = Object.values(FeatureFlag)

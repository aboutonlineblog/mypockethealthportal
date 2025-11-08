export type ConcernPayloadProps = {
    message: string;
    type: "feedback" | "feature_request" | "support" | "bug_report" | null
}
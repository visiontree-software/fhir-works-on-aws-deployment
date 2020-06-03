export const SEPARATOR: string = '_';

export const enum ISSUE_SEVERITY {
    FATAL = 'fatal',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'information',
}

export const DEFAULT_SEARCH_RESULTS_PER_PAGE = 20;

export const MAX_BUNDLE_ENTRIES = 25;

// API Gateway integration max timeout is 29 seconds, so let lambda have 26 seconds to process
// https://docs.aws.amazon.com/apigateway/latest/developerguide/limits.html
export const MAX_CODE_EXECUTION_TIME_IN_MS = 26 * 1000;

export const enum SEARCH_PAGINATION_PARAMS {
    PAGES_OFFSET = '_getpagesoffset',
    COUNT = '_count',
}

// Codes defined here= https://www.hl7.org/fhir/valueset-issue-type.html
export const enum ISSUE_CODE {
    // Invalid can be seen as a parent essentially to these, see Level on above url
    // This means structure, required, value, and invariant, are all also invalid
    // you can send invalid back or something more specific
    INVALID = 'invalid',
    STRUCTURE = 'structure',
    REQUIRED = 'required',
    VALUE = 'value',
    INVARIANT = 'invariant',
    // Security is parent of login, unknown, expired, forbidden, and surpressed
    SECURITY = 'security',
    LOGIN = 'login',
    UNKNOWN = 'unknown',
    EXPIRED = 'expired',
    FORBIDDEN = 'forbidden',
    SUPPRESSED = 'surpressed',
    // Procesing has no parent/children
    PROCESSING = 'processing',
    // Not Supported is parent of duplicate, not found, and too long
    NOT_SUPPORTED = 'not-supported',
    DUPLICATE = 'duplicate',
    NOT_FOUND = 'not-found',
    TOO_LONG = 'too-long',
    // Code invalid is parent of extension, too costly, business rule, conflict, and incomplete
    CODE_INVALID = 'code-invalid',
    EXTENSION = 'extension',
    TOO_COSTLY = 'too-costly',
    BUSINESS_RULE = 'business-rule',
    CONFLICT = 'conflict',
    INCOMPLETE = 'incomplete',
    // Transient is parent of lock error, no store, exception, timeout, and throttled
    TRANSIENT = 'transient',
    LOCK_ERROR = 'lock-error',
    NO_STORE = 'no-store',
    EXCEPTION = 'exception',
    TIMEOUT = 'timeout',
    THROTTLED = 'throttled',
    // Informational has no parent/children
    INFORMATIONAL = 'informational',
}

/**
 * Interactions types we support
 */
export const enum INTERACTION {
    CREATE = 'create',
    READ = 'read',
    VREAD = 'vread',
    UPDATE = 'update',
    DELETE = 'delete',
}

/**
 * These are currently the only versions we support
 */
export const enum VERSION {
    R3_0_1 = '3.0.1',
    R4_0_1 = '4.0.1',
}

export enum R4_RESOURCE {
    Account = 'Account',
    ActivityDefinition = 'ActivityDefinition',
    AdverseEvent = 'AdverseEvent',
    AllergyIntolerance = 'AllergyIntolerance',
    Appointment = 'Appointment',
    AppointmentResponse = 'AppointmentResponse',
    AuditEvent = 'AuditEvent',
    Basic = 'Basic',
    Binary = 'Binary',
    BiologicallyDerivedProduct = 'BiologicallyDerivedProduct',
    BodyStructure = 'BodyStructure',
    Bundle = 'Bundle',
    CapabilityStatement = 'CapabilityStatement',
    CarePlan = 'CarePlan',
    CareTeam = 'CareTeam',
    CatalogEntry = 'CatalogEntry',
    ChargeItem = 'ChargeItem',
    ChargeItemDefinition = 'ChargeItemDefinition',
    Claim = 'Claim',
    ClaimResponse = 'ClaimResponse',
    ClinicalImpression = 'ClinicalImpression',
    CodeSystem = 'CodeSystem',
    Communication = 'Communication',
    CommunicationRequest = 'CommunicationRequest',
    CompartmentDefinition = 'CompartmentDefinition',
    Composition = 'Composition',
    ConceptMap = 'ConceptMap',
    Condition = 'Condition',
    Consent = 'Consent',
    Contract = 'Contract',
    Coverage = 'Coverage',
    CoverageEligibilityRequest = 'CoverageEligibilityRequest',
    CoverageEligibilityResponse = 'CoverageEligibilityResponse',
    DetectedIssue = 'DetectedIssue',
    Device = 'Device',
    DeviceDefinition = 'DeviceDefinition',
    DeviceMetric = 'DeviceMetric',
    DeviceRequest = 'DeviceRequest',
    DeviceUseStatement = 'DeviceUseStatement',
    DiagnosticReport = 'DiagnosticReport',
    DocumentManifest = 'DocumentManifest',
    DocumentReference = 'DocumentReference',
    EffectEvidenceSynthesis = 'EffectEvidenceSynthesis',
    Encounter = 'Encounter',
    Endpoint = 'Endpoint',
    EnrollmentRequest = 'EnrollmentRequest',
    EnrollmentResponse = 'EnrollmentResponse',
    EpisodeOfCare = 'EpisodeOfCare',
    EventDefinition = 'EventDefinition',
    Evidence = 'Evidence',
    EvidenceVariable = 'EvidenceVariable',
    ExampleScenario = 'ExampleScenario',
    ExplanationOfBenefit = 'ExplanationOfBenefit',
    FamilyMemberHistory = 'FamilyMemberHistory',
    Flag = 'Flag',
    Goal = 'Goal',
    GraphDefinition = 'GraphDefinition',
    Group = 'Group',
    GuidanceResponse = 'GuidanceResponse',
    HealthcareService = 'HealthcareService',
    ImagingStudy = 'ImagingStudy',
    Immunization = 'Immunization',
    ImmunizationEvaluation = 'ImmunizationEvaluation',
    ImmunizationRecommendation = 'ImmunizationRecommendation',
    ImplementationGuide = 'ImplementationGuide',
    InsurancePlan = 'InsurancePlan',
    Invoice = 'Invoice',
    Library = 'Library',
    Linkage = 'Linkage',
    List = 'List',
    Location = 'Location',
    Measure = 'Measure',
    MeasureReport = 'MeasureReport',
    Media = 'Media',
    Medication = 'Medication',
    MedicationAdministration = 'MedicationAdministration',
    MedicationDispense = 'MedicationDispense',
    MedicationKnowledge = 'MedicationKnowledge',
    MedicationRequest = 'MedicationRequest',
    MedicationStatement = 'MedicationStatement',
    MedicinalProduct = 'MedicinalProduct',
    MedicinalProductAuthorization = 'MedicinalProductAuthorization',
    MedicinalProductContraindication = 'MedicinalProductContraindication',
    MedicinalProductIndication = 'MedicinalProductIndication',
    MedicinalProductIngredient = 'MedicinalProductIngredient',
    MedicinalProductInteraction = 'MedicinalProductInteraction',
    MedicinalProductManufactured = 'MedicinalProductManufactured',
    MedicinalProductPackaged = 'MedicinalProductPackaged',
    MedicinalProductPharmaceutical = 'MedicinalProductPharmaceutical',
    MedicinalProductUndesirableEffect = 'MedicinalProductUndesirableEffect',
    MessageDefinition = 'MessageDefinition',
    MessageHeader = 'MessageHeader',
    MolecularSequence = 'MolecularSequence',
    NamingSystem = 'NamingSystem',
    NutritionOrder = 'NutritionOrder',
    Observation = 'Observation',
    ObservationDefinition = 'ObservationDefinition',
    OperationDefinition = 'OperationDefinition',
    OperationOutcome = 'OperationOutcome',
    Organization = 'Organization',
    OrganizationAffiliation = 'OrganizationAffiliation',
    Parameters = 'Parameters',
    Patient = 'Patient',
    PaymentNotice = 'PaymentNotice',
    PaymentReconciliation = 'PaymentReconciliation',
    Person = 'Person',
    PlanDefinition = 'PlanDefinition',
    Practitioner = 'Practitioner',
    PractitionerRole = 'PractitionerRole',
    Procedure = 'Procedure',
    Provenance = 'Provenance',
    Questionnaire = 'Questionnaire',
    QuestionnaireResponse = 'QuestionnaireResponse',
    RelatedPerson = 'RelatedPerson',
    RequestGroup = 'RequestGroup',
    ResearchDefinition = 'ResearchDefinition',
    ResearchElementDefinition = 'ResearchElementDefinition',
    ResearchStudy = 'ResearchStudy',
    ResearchSubject = 'ResearchSubject',
    RiskAssessment = 'RiskAssessment',
    RiskEvidenceSynthesis = 'RiskEvidenceSynthesis',
    Schedule = 'Schedule',
    SearchParameter = 'SearchParameter',
    ServiceRequest = 'ServiceRequest',
    Slot = 'Slot',
    Specimen = 'Specimen',
    SpecimenDefinition = 'SpecimenDefinition',
    StructureDefinition = 'StructureDefinition',
    StructureMap = 'StructureMap',
    Subscription = 'Subscription',
    Substance = 'Substance',
    SubstancePolymer = 'SubstancePolymer',
    SubstanceProtein = 'SubstanceProtein',
    SubstanceReferenceInformation = 'SubstanceReferenceInformation',
    SubstanceSpecification = 'SubstanceSpecification',
    SubstanceSourceMaterial = 'SubstanceSourceMaterial',
    SupplyDelivery = 'SupplyDelivery',
    SupplyRequest = 'SupplyRequest',
    Task = 'Task',
    TerminologyCapabilities = 'TerminologyCapabilities',
    TestReport = 'TestReport',
    TestScript = 'TestScript',
    ValueSet = 'ValueSet',
    VerificationResult = 'VerificationResult',
    VisionPrescription = 'VisionPrescription',
}

export enum R3_RESOURCE {
    Account = 'Account',
    ActivityDefinition = 'ActivityDefinition',
    AdverseEvent = 'AdverseEvent',
    AllergyIntolerance = 'AllergyIntolerance',
    Appointment = 'Appointment',
    AppointmentResponse = 'AppointmentResponse',
    AuditEvent = 'AuditEvent',
    Basic = 'Basic',
    Binary = 'Binary',
    BodySite = 'BodySite',
    Bundle = 'Bundle',
    CapabilityStatement = 'CapabilityStatement',
    CarePlan = 'CarePlan',
    CareTeam = 'CareTeam',
    ChargeItem = 'ChargeItem',
    Claim = 'Claim',
    ClaimResponse = 'ClaimResponse',
    ClinicalImpression = 'ClinicalImpression',
    CodeSystem = 'CodeSystem',
    Communication = 'Communication',
    CommunicationRequest = 'CommunicationRequest',
    CompartmentDefinition = 'CompartmentDefinition',
    Composition = 'Composition',
    ConceptMap = 'ConceptMap',
    Condition = 'Condition',
    Consent = 'Consent',
    Contract = 'Contract',
    Coverage = 'Coverage',
    DataElement = 'DataElement',
    DetectedIssue = 'DetectedIssue',
    Device = 'Device',
    DeviceComponent = 'DeviceComponent',
    DeviceMetric = 'DeviceMetric',
    DeviceRequest = 'DeviceRequest',
    DeviceUseStatement = 'DeviceUseStatement',
    DiagnosticReport = 'DiagnosticReport',
    DocumentManifest = 'DocumentManifest',
    DocumentReference = 'DocumentReference',
    EligibilityRequest = 'EligibilityRequest',
    EligibilityResponse = 'EligibilityResponse',
    Encounter = 'Encounter',
    Endpoint = 'Endpoint',
    EnrollmentRequest = 'EnrollmentRequest',
    EnrollmentResponse = 'EnrollmentResponse',
    EpisodeOfCare = 'EpisodeOfCare',
    ExpansionProfile = 'ExpansionProfile',
    ExplanationOfBenefit = 'ExplanationOfBenefit',
    FamilyMemberHistory = 'FamilyMemberHistory',
    Flag = 'Flag',
    Goal = 'Goal',
    GraphDefinition = 'GraphDefinition',
    Group = 'Group',
    GuidanceResponse = 'GuidanceResponse',
    HealthcareService = 'HealthcareService',
    ImagingManifest = 'ImagingManifest',
    ImagingStudy = 'ImagingStudy',
    Immunization = 'Immunization',
    ImmunizationRecommendation = 'ImmunizationRecommendation',
    ImplementationGuide = 'ImplementationGuide',
    Library = 'Library',
    Linkage = 'Linkage',
    List = 'List',
    Location = 'Location',
    Measure = 'Measure',
    MeasureReport = 'MeasureReport',
    Media = 'Media',
    Medication = 'Medication',
    MedicationAdministration = 'MedicationAdministration',
    MedicationDispense = 'MedicationDispense',
    MedicationRequest = 'MedicationRequest',
    MedicationStatement = 'MedicationStatement',
    MessageDefinition = 'MessageDefinition',
    MessageHeader = 'MessageHeader',
    NamingSystem = 'NamingSystem',
    NutritionOrder = 'NutritionOrder',
    Observation = 'Observation',
    OperationDefinition = 'OperationDefinition',
    OperationOutcome = 'OperationOutcome',
    Organization = 'Organization',
    Parameters = 'Parameters',
    Patient = 'Patient',
    PaymentNotice = 'PaymentNotice',
    PaymentReconciliation = 'PaymentReconciliation',
    Person = 'Person',
    PlanDefinition = 'PlanDefinition',
    Practitioner = 'Practitioner',
    PractitionerRole = 'PractitionerRole',
    Procedure = 'Procedure',
    ProcedureRequest = 'ProcedureRequest',
    ProcessRequest = 'ProcessRequest',
    ProcessResponse = 'ProcessResponse',
    Provenance = 'Provenance',
    Questionnaire = 'Questionnaire',
    QuestionnaireResponse = 'QuestionnaireResponse',
    ReferralRequest = 'ReferralRequest',
    RelatedPerson = 'RelatedPerson',
    RequestGroup = 'RequestGroup',
    ResearchStudy = 'ResearchStudy',
    ResearchSubject = 'ResearchSubject',
    RiskAssessment = 'RiskAssessment',
    Schedule = 'Schedule',
    SearchParameter = 'SearchParameter',
    Sequence = 'Sequence',
    ServiceDefinition = 'ServiceDefinition',
    Slot = 'Slot',
    Specimen = 'Specimen',
    StructureDefinition = 'StructureDefinition',
    StructureMap = 'StructureMap',
    Subscription = 'Subscription',
    Substance = 'Substance',
    SupplyDelivery = 'SupplyDelivery',
    SupplyRequest = 'SupplyRequest',
    Task = 'Task',
    TestScript = 'TestScript',
    TestReport = 'TestReport',
    ValueSet = 'ValueSet',
    VisionPrescription = 'VisionPrescription',
}
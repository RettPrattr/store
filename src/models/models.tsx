export interface IActions {
    FETCH_PRODUCTS: string;
    SET_SEARCH_PRODUCTS: string;
    CLEAR_SEARCH_PRODUCTS: string;
}

export interface IProductFromRapid {
    image: ProductImage;
    availableColr: string[];
    sephoraProduct: boolean;
    rating: number;
    valueAddedIcons: string[];
    prodType: string;
    ypEligible: boolean;
    sponsoredData?: any;
    valueAddedBadges: number;
    isBossAvailable: boolean;
    productTitle: string;
    isAvailableforShip: boolean;
    seoURL: string;
    webID: string;
    isVGC: boolean;
    variations: string;
    storeNumbers: number[];
    swatchImages: string[];
    displayColor: string[];
    prices: Price;
    boosted: boolean;
    altImageUrl: string;
    isAvailableforPickUp: boolean;
    quantity?: number;
}

// interface AddedQuantityProp extends IProductFromRapid {
//     cartQuantity: number
//    }



export interface ProductImage {
    width: string;
    url: string;
    height: string;
}

export interface Price {
    isCurrentPrice: boolean;
    salePriceType?: any;
    isSuppressed: boolean;
    salePrice: SalePrice;
    salePriceStatus: string;
    regularPrice: RegularPrice;
    regularPriceType: string;
    displayEndDateTime: string;
    purchaseBegDateTime: string;
    purchaseEndDateTime: string;
    priceCode: string;
    suppressedPricingText?: any;
    promotions: Promotions;
    displayBegDateTime: string;
    promotion: string;
    statusCode: string;
    isPriceInstore: boolean;
}

export interface SalePrice {
    minPrice: number;
    maxPrice?: number;
}

export interface RegularPrice {
    minPrice: number;
    maxPrice?: number;
}

export interface Promotions {
    tieredPrice: any[];
    bogo: any[];
    group: string[];
}

export interface AllProduct {
    tabName: string;
    count: number;
    isSelected: boolean;
    url: string;
}

export interface TabInfo {
    allProducts: AllProduct[];
}

export interface AgeAppropriate {
    value: string;
}

export interface AdUnit {
    value: string;
}

export interface Monetization {
    ageAppropriate: AgeAppropriate;
    occasion?: any;
    sizeRange?: any;
    bodyType?: any;
    sportsLeague?: any;
    personaCategory?: any;
    gender?: any;
    activity?: any;
    trend?: any;
    personaSubject?: any;
    personaGroupCode?: any;
    legOpening?: any;
    adUnit: AdUnit;
    ageAppropriateRange?: any;
    childAgeRange?: any;
    fit?: any;
    feature?: any;
    personaTheme?: any;
    silhouette?: any;
    sportsTeam?: any;
    roastsFlavors?: any;
    brand?: any;
}

export interface ActiveDimensionValue {
    seoURL: string;
    name: string;
    index: number;
    currentDimensionId: string;
    currentAttributeId?: any;
    ID: string;
    productCount: number;
    breadcrumbType?: any;
}

export interface ActiveDimension {
    name: string;
    index: number;
    label: string;
    activeDimensionValues: ActiveDimensionValue[];
}

export interface Image {
    width: string;
    url: string;
    height: string;
}

export interface Rating {
    count: number;
    avgRating: number;
}

export interface ValueAddedBadges {
    realTime: string[];
    other: string[];
    pricing: string[];
}

export interface StoreNumber {
    value: string;
}

export interface SwatchImage {
    color: string;
    URL: string;
}



export interface Sort {
    name: string;
    active: boolean;
    ID: string;
}

export interface MetaInfo {
    metaKeywords?: any;
    metaTitle: string;
    copyBlock?: any;
    seoLinks?: any;
    seoNoIndex: string;
    metaDescription: string;
}

export interface SpotLights {
    bannerContents: any[];
}

export interface LinkCartridge {
    linkGroup: any[];
}

export interface DimensionValue {
    seoURL: string;
    noFollow: boolean;
    name: string;
    index: number;
    active: boolean;
    currentDimensionId: string;
    currentAttributeId?: any;
    ID: string;
    productCount: number;
}

export interface Dimension {
    dimensionValues: DimensionValue[];
    clearSEOURL: string;
    name: string;
    index: number;
    label: string;
}

export interface Payload {
    autoCorrectedTerm?: any;
    tabInfo: TabInfo;
    disclaimerType?: any;
    monetization: Monetization;
    availableTerms: any[];
    activeDimensions: ActiveDimension[];
    products: IProductFromRapid[];
    suppressAds: boolean;
    searchTerm: string;
    relevancyAlgorithm: string;
    omnitureInfo?: any;
    storeBreadcrumbURL?: any;
    links?: any;
    resultsPersonalized: boolean;
    sorts: Sort[];
    legalDisclaimer?: any;
    h1tag: string;
    pageSeoURL: string;
    searchResultMessage?: any;
    stores?: any;
    metaInfo: MetaInfo;
    spotLights: SpotLights;
    selectedDimensions: any[];
    linkCartridge: LinkCartridge;
    relatedSearchTerms: any[];
    monetizationRequest?: any;
    propensityAvailable?: any;
    sephoraProducts: boolean;
    pageURL: string;
    dimensions: Dimension[];
    encoded: boolean;
}

export interface ServerResponse {
    offset: number;
    payload: Payload;
    count: number;
    limit: number;
}



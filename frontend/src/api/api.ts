/* tslint:disable */
/* eslint-disable */
/**
 * Pimp My CV API
 * CV Enhancer RESTful API
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from './configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
import type { RequestArgs } from './base';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface HTTPValidationError
 */
export interface HTTPValidationError {
    /**
     * 
     * @type {Array<ValidationError>}
     * @memberof HTTPValidationError
     */
    'detail'?: Array<ValidationError>;
}
/**
 * 
 * @export
 * @interface LocationInner
 */
export interface LocationInner {
}
/**
 * 
 * @export
 * @interface ValidationError
 */
export interface ValidationError {
    /**
     * 
     * @type {Array<LocationInner>}
     * @memberof ValidationError
     */
    'loc': Array<LocationInner>;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'msg': string;
    /**
     * 
     * @type {string}
     * @memberof ValidationError
     */
    'type': string;
}

/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Method that gets CV file as a pdf/text file and a list of strings representing desired job postings and returns new CV.  Parameters:     cv_file (UploadFile): A CV file as a PDF/.txt     urls (List[str]): A list of URL job postings  Returns:     result (dict): result JSON with MD format of new CV
         * @summary Upload Data
         * @param {File} cvFile 
         * @param {Array<string>} urls 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadDataUploadPost: async (cvFile: File, urls: Array<string>, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cvFile' is not null or undefined
            assertParamExists('uploadDataUploadPost', 'cvFile', cvFile)
            // verify required parameter 'urls' is not null or undefined
            assertParamExists('uploadDataUploadPost', 'urls', urls)
            const localVarPath = `/upload`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();


            if (cvFile !== undefined) { 
                localVarFormParams.append('cv_file', cvFile as any);
            }
                if (urls) {
                localVarFormParams.append('urls', urls.join(COLLECTION_FORMATS.csv));
            }

    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * Method that gets CV file as a pdf/text file and a list of strings representing desired job postings and returns new CV.  Parameters:     cv_file (UploadFile): A CV file as a PDF/.txt     urls (List[str]): A list of URL job postings  Returns:     result (dict): result JSON with MD format of new CV
         * @summary Upload Data
         * @param {File} cvFile 
         * @param {Array<string>} urls 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadDataUploadPost(cvFile: File, urls: Array<string>, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadDataUploadPost(cvFile, urls, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * Method that gets CV file as a pdf/text file and a list of strings representing desired job postings and returns new CV.  Parameters:     cv_file (UploadFile): A CV file as a PDF/.txt     urls (List[str]): A list of URL job postings  Returns:     result (dict): result JSON with MD format of new CV
         * @summary Upload Data
         * @param {File} cvFile 
         * @param {Array<string>} urls 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadDataUploadPost(cvFile: File, urls: Array<string>, options?: any): AxiosPromise<object> {
            return localVarFp.uploadDataUploadPost(cvFile, urls, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * Method that gets CV file as a pdf/text file and a list of strings representing desired job postings and returns new CV.  Parameters:     cv_file (UploadFile): A CV file as a PDF/.txt     urls (List[str]): A list of URL job postings  Returns:     result (dict): result JSON with MD format of new CV
     * @summary Upload Data
     * @param {File} cvFile 
     * @param {Array<string>} urls 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public uploadDataUploadPost(cvFile: File, urls: Array<string>, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).uploadDataUploadPost(cvFile, urls, options).then((request) => request(this.axios, this.basePath));
    }
}



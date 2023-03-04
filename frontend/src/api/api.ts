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
 * @interface EnhanceBody
 */
export interface EnhanceBody {
    /**
     * 
     * @type {string}
     * @memberof EnhanceBody
     */
    'file_hash': string;
    /**
     * 
     * @type {string}
     * @memberof EnhanceBody
     */
    'job_posting_url': string;
}
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
         * Method that checks whether a file exists in the server filestore by using its hash.  Parameters:     file_hash (str): the SHA256 hash of the file\'s name as Hex  Returns:     response (dict): JSON output with single \'response\' key with Boolean value representing file existence
         * @summary Check File Exists
         * @param {string} fileHash 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkFileExistsFileFileHashGet: async (fileHash: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'fileHash' is not null or undefined
            assertParamExists('checkFileExistsFileFileHashGet', 'fileHash', fileHash)
            const localVarPath = `/file/{file_hash}`
                .replace(`{${"file_hash"}}`, encodeURIComponent(String(fileHash)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Method that takes in a file hash (as hex SHA256 output) and a job posting URL and returns an enhanced version of the URL tailored for the job posting.  Parameters:     file_hash (str): A hash representation (SHA256) of the desired file\'s name     job_posting_url (str): A url pointing to the desired job posting  Returns:     result (dict): result JSON with MarkDown format of enhanced CV
         * @summary Enhance Cv
         * @param {EnhanceBody} enhanceBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enhanceCvEnhancePost: async (enhanceBody: EnhanceBody, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'enhanceBody' is not null or undefined
            assertParamExists('enhanceCvEnhancePost', 'enhanceBody', enhanceBody)
            const localVarPath = `/enhance`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(enhanceBody, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Method that gets CV file as a pdf/text file and stores it in server\'s memory.  Parameters:     cv_file (UploadFile): A CV file as a PDF/.txt  Returns:     response (str): JSON string output containing the file hash
         * @summary Upload File
         * @param {File} cvFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFileUploadPost: async (cvFile: File, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cvFile' is not null or undefined
            assertParamExists('uploadFileUploadPost', 'cvFile', cvFile)
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
         * Method that checks whether a file exists in the server filestore by using its hash.  Parameters:     file_hash (str): the SHA256 hash of the file\'s name as Hex  Returns:     response (dict): JSON output with single \'response\' key with Boolean value representing file existence
         * @summary Check File Exists
         * @param {string} fileHash 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async checkFileExistsFileFileHashGet(fileHash: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.checkFileExistsFileFileHashGet(fileHash, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Method that takes in a file hash (as hex SHA256 output) and a job posting URL and returns an enhanced version of the URL tailored for the job posting.  Parameters:     file_hash (str): A hash representation (SHA256) of the desired file\'s name     job_posting_url (str): A url pointing to the desired job posting  Returns:     result (dict): result JSON with MarkDown format of enhanced CV
         * @summary Enhance Cv
         * @param {EnhanceBody} enhanceBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async enhanceCvEnhancePost(enhanceBody: EnhanceBody, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.enhanceCvEnhancePost(enhanceBody, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Method that gets CV file as a pdf/text file and stores it in server\'s memory.  Parameters:     cv_file (UploadFile): A CV file as a PDF/.txt  Returns:     response (str): JSON string output containing the file hash
         * @summary Upload File
         * @param {File} cvFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async uploadFileUploadPost(cvFile: File, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<object>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.uploadFileUploadPost(cvFile, options);
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
         * Method that checks whether a file exists in the server filestore by using its hash.  Parameters:     file_hash (str): the SHA256 hash of the file\'s name as Hex  Returns:     response (dict): JSON output with single \'response\' key with Boolean value representing file existence
         * @summary Check File Exists
         * @param {string} fileHash 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        checkFileExistsFileFileHashGet(fileHash: string, options?: any): AxiosPromise<object> {
            return localVarFp.checkFileExistsFileFileHashGet(fileHash, options).then((request) => request(axios, basePath));
        },
        /**
         * Method that takes in a file hash (as hex SHA256 output) and a job posting URL and returns an enhanced version of the URL tailored for the job posting.  Parameters:     file_hash (str): A hash representation (SHA256) of the desired file\'s name     job_posting_url (str): A url pointing to the desired job posting  Returns:     result (dict): result JSON with MarkDown format of enhanced CV
         * @summary Enhance Cv
         * @param {EnhanceBody} enhanceBody 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        enhanceCvEnhancePost(enhanceBody: EnhanceBody, options?: any): AxiosPromise<object> {
            return localVarFp.enhanceCvEnhancePost(enhanceBody, options).then((request) => request(axios, basePath));
        },
        /**
         * Method that gets CV file as a pdf/text file and stores it in server\'s memory.  Parameters:     cv_file (UploadFile): A CV file as a PDF/.txt  Returns:     response (str): JSON string output containing the file hash
         * @summary Upload File
         * @param {File} cvFile 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        uploadFileUploadPost(cvFile: File, options?: any): AxiosPromise<object> {
            return localVarFp.uploadFileUploadPost(cvFile, options).then((request) => request(axios, basePath));
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
     * Method that checks whether a file exists in the server filestore by using its hash.  Parameters:     file_hash (str): the SHA256 hash of the file\'s name as Hex  Returns:     response (dict): JSON output with single \'response\' key with Boolean value representing file existence
     * @summary Check File Exists
     * @param {string} fileHash 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public checkFileExistsFileFileHashGet(fileHash: string, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).checkFileExistsFileFileHashGet(fileHash, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Method that takes in a file hash (as hex SHA256 output) and a job posting URL and returns an enhanced version of the URL tailored for the job posting.  Parameters:     file_hash (str): A hash representation (SHA256) of the desired file\'s name     job_posting_url (str): A url pointing to the desired job posting  Returns:     result (dict): result JSON with MarkDown format of enhanced CV
     * @summary Enhance Cv
     * @param {EnhanceBody} enhanceBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public enhanceCvEnhancePost(enhanceBody: EnhanceBody, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).enhanceCvEnhancePost(enhanceBody, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Method that gets CV file as a pdf/text file and stores it in server\'s memory.  Parameters:     cv_file (UploadFile): A CV file as a PDF/.txt  Returns:     response (str): JSON string output containing the file hash
     * @summary Upload File
     * @param {File} cvFile 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public uploadFileUploadPost(cvFile: File, options?: AxiosRequestConfig) {
        return DefaultApiFp(this.configuration).uploadFileUploadPost(cvFile, options).then((request) => request(this.axios, this.basePath));
    }
}



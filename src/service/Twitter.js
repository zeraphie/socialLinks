/**
 * Social Links - Twitter
 *
 * This class handles the twitter link generation
 *
 * @license MIT
 * @version 2.0.0
 * @author Izzy Skye
 */
export default class ServiceTwitter {
    static get serviceMap(){
        return {
            name: 'twitter',
            class: this,
            enabled: true,
            order: 10
        };
    }
    
    /**
     * The svg element for the service
     *
     * @returns {string}
     */
    static get svg(){
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" width="450" height="450" viewBox="0 0 450 450" xml:space="preserve" fill="rgb(0, 0, 0)"><style>.s0{fill:rgb(0, 0, 0);}</style><path d="M450 85.7c-17.7 7.6-35.4 12.4-53.1 14.3 20-12 33.5-28.9 40.5-50.8 -18.3 10.8-37.8 18.3-58.5 22.3 -18.3-19.4-40.7-29.1-67.4-29.1 -25.5 0-47.2 9-65.2 27 -18 18-27 39.7-27 65.2 0 6.9 0.8 13.9 2.3 21.1 -37.7-1.9-73-11.4-106.1-28.4C82.5 110.2 54.4 87.5 31.4 59.1c-8.4 14.3-12.6 29.8-12.6 46.5 0 15.8 3.7 30.5 11.1 44 7.4 13.5 17.4 24.5 30 32.8 -14.8-0.6-28.7-4.5-41.7-11.7v1.1c0 22.3 7 41.8 21 58.7 14 16.8 31.6 27.5 53 31.8 -8 2.1-16.1 3.1-24.3 3.1 -5.3 0-11.1-0.5-17.4-1.4 5.9 18.5 16.8 33.6 32.5 45.5 15.8 11.9 33.7 18 53.7 18.4 -33.5 26.3-71.7 39.4-114.5 39.4 -8.2 0-15.6-0.4-22.3-1.1 42.8 27.6 90 41.4 141.6 41.4 32.7 0 63.5-5.2 92.2-15.6 28.7-10.4 53.3-24.3 73.7-41.7 20.4-17.4 37.9-37.4 52.7-60.1 14.8-22.7 25.7-46.3 33-70.9 7.2-24.7 10.8-49.3 10.8-74.1 0-5.3-0.1-9.3-0.3-12C421.8 120.2 437.2 104.3 450 85.7z" fill="rgb(0, 0, 0)"></path></svg>`;
    }
    
    /**
     * The base url for the share
     *
     * @returns {string}
     */
    static get base_url(){
        return 'https://twitter.com/intent/tweet/';
    }

    /**
     * The query parameters
     *
     * @param params
     * @returns {{text: string, url: string}}
     */
    static shareParams(params){
        return {
            text: params.text,
            url: params.url
        };
    }
}

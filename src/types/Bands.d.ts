
export namespace Bands {

    type MemberType = {
        name: string
    }
    type BandType = {
        [string: string]: any
        id: number,
        name: string,
        genreCode: string,
        year: number,
        country: string,
        members: MemberType[]
    }
    type GenreType = {
        code: string,
        name: string
    }
    type AlbumType = {
        id: number,
        bandId: number,
        name: string,
        year: number
    }

    interface BandsContext {
        bands: BandType[],
        fetchBands: () => void,
        sortBands: (sortBy:string, order:string) => void
    }

    type BandsReducer = (
        state:BandType[], 
        action:{
            type:string, 
            value:BandType[]
        }) => void 

}
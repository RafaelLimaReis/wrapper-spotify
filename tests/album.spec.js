/**
 * getAlbum
 * getAlbums
 * getAlbumTracks
 */

  import chai, { expect } from 'chai';
  import { getAlbum, getAlbumTracks, getAlbums } from '../src/album';
  import sinon from 'sinon';
  import sinonChai from 'sinon-chai';
  import sinonStubPromise from 'sinon-stub-promise';
  sinonStubPromise(sinon);

  chai.use(sinonChai);

  global.fetch = require('node-fetch');

  describe('Album', () => {
    let stubedFetch;
    let promise;

    beforeEach(() => {
      stubedFetch = sinon.stub(global, 'fetch');
      promise = stubedFetch.returnsPromise();
    });

    afterEach(() => {
      stubedFetch.restore();
    });

    describe('smoke tests', () => {

      it('should have getalbum method', () => {
        expect(getAlbum).to.exists;
      });

      it('should have getAlbumTracks method', () => {
        expect(getAlbumTracks).to.exists;
      });
    });

    describe('getAlbum', () => {
      it('should call fetch method', () => {
        const album = getAlbum();
        expect(stubedFetch).to.have.been.calledOnce;
      });

      it('should call fetch with the correct URL', () => {
        const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

        const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTT');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTT');
      });

      it('should return the correct data from promise', () => {
        promise.resolves({album: 'name'});
        const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
        expect(album.resolveValue).to.be.eql({album: 'name'});
      })
    });

    describe('getAlbums', () => {
      it('should call fetch method', () => {
        const album = getAlbums();
        expect(stubedFetch).to.have.been.calledOnce;
      });

      it('should call fetch with the correct URL', () => {
        const album = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTq']);
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTq');

        const album2 = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTq']);
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTq');
      });

      it('should return the correct data from promise', () => {
        promise.resolves({ album: 'name' });
        const album = getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTq']);
        expect(album.resolveValue).to.be.eql({ album: 'name' });
      })
    });

    describe('getAlbumTracks', () => {
      it('should call fetch method', () => {
        const album = getAlbumTracks();
        expect(stubedFetch).to.have.been.calledOnce;
      });

      it('should call fetch with the correct URL', () => {
        const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');

        const album2 = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
      });

      it('should return the correct data from promise', () => {
        promise.resolves({ album: 'name' });
        const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
        expect(album.resolveValue).to.be.eql({ album: 'name' });
      })
    });
  });

/**
 * getAlbum
 * getAlbums
 * getAlbumTracks
 */

  import chai, { expect } from 'chai';
  import { getAlbum, getAlbumTracks } from '../src/album';
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
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albuns/4aawyAB9vmqN3uQ7FjRGTy');

        const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTT');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albuns/4aawyAB9vmqN3uQ7FjRGTT');
      });

      it('should return the correct data from promise', () => {
        promise.resolves({album: 'name'});
        const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
        expect(album.resolveValue).to.be.eql({album: 'name'});
      })
    });
  });

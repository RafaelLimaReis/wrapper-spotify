/**
 * getAlbum
 * getAlbums
 * getTracks
 */

  import chai, { expect } from 'chai';
  import sinon from 'sinon';
  import sinonChai from 'sinon-chai';
  import sinonStubPromise from 'sinon-stub-promise';
  sinonStubPromise(sinon);

  chai.use(sinonChai);

  global.fetch = require('node-fetch');

  import SpotifyWrapper from '../src/index';

  describe('Album', () => {
    let spotify;
    let stubedFetch;
    let promise;

    beforeEach(() => {
      spotify = new SpotifyWrapper({
        token: 'foo'
      });
      stubedFetch = sinon.stub(global, 'fetch');
      promise = stubedFetch.returnsPromise();
    });

    afterEach(() => {
      stubedFetch.restore();
    });

    describe('smoke tests', () => {

      it('should have getalbum method', () => {
        expect(spotify.album.getAlbum).to.exists;
      });

      it('should have getTracks method', () => {
        expect(spotify.album.getTracks).to.exists;
      });
    });

    describe('getAlbum', () => {
      it('should call fetch method', () => {
        const album = spotify.album.getAlbum();
        expect(stubedFetch).to.have.been.calledOnce;
      });

      it('should call fetch with the correct URL', () => {
        const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy');

        const album2 = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTT');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTT');
      });

      it('should return the correct data from promise', () => {
        promise.resolves({album: 'name'});
        const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
        expect(album.resolveValue).to.be.eql({album: 'name'});
      })
    });

    describe('getAlbums', () => {
      it('should call fetch method', () => {
        const album = spotify.album.getAlbums();
        expect(stubedFetch).to.have.been.calledOnce;
      });

      it('should call fetch with the correct URL', () => {
        const album = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTq']);
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTq');

        const album2 = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTq']);
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=4aawyAB9vmqN3uQ7FjRGTy,4aawyAB9vmqN3uQ7FjRGTq');
      });

      it('should return the correct data from promise', () => {
        promise.resolves({ album: 'name' });
        const album = spotify.album.getAlbums(['4aawyAB9vmqN3uQ7FjRGTy', '4aawyAB9vmqN3uQ7FjRGTq']);
        expect(album.resolveValue).to.be.eql({ album: 'name' });
      })
    });

    describe('getTracks', () => {
      it('should call fetch method', () => {
        const album = spotify.album.getTracks();
        expect(stubedFetch).to.have.been.calledOnce;
      });

      it('should call fetch with the correct URL', () => {
        const album = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');

        const album2 = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
        expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks');
      });

      it('should return the correct data from promise', () => {
        promise.resolves({ album: 'name' });
        const album = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
        expect(album.resolveValue).to.be.eql({ album: 'name' });
      })
    });
  });
